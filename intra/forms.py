from django import forms
from django.conf import settings
from django.utils.translation import ugettext_lazy as _

from crispy_forms.layout import Layout, Fieldset

from core.models import Person
from core.utils import horizontal_form_helper, indented_without_label, ensure_user_is_member_of_group
from labour.models.constants import JOB_TITLE_LENGTH

from .models import TeamMember, Team
from .models.intra_event_meta import SUPPORTED_APPS


class TeamMemberForm(forms.ModelForm):
    job_title = forms.CharField(
        max_length=JOB_TITLE_LENGTH,
        label=_('Job title'),
        required=False,
        help_text=_(
            'This corresponds to the job title field in the volunteer worker management. This is what is '
            'printed in this person\'s badge, if they will receive one. '
            'If unset, a default value based on the job category will be used for the badge.'
        ),
    )

    def __init__(self, *args, **kwargs):
        event = kwargs.pop('event')

        instance = kwargs.get('instance')
        initial = kwargs.setdefault('initial', dict())
        if instance:
            initial['job_title'] = instance.signup.job_title

        super(TeamMemberForm, self).__init__(*args, **kwargs)

        if not instance:
            # simplify form for new users
            for field_name in [
                'job_title',
                'override_job_title',
            ]:
                del self.fields[field_name]

        self.fields['team'].queryset = Team.objects.filter(event=event)
        self.fields['person'].queryset = Person.objects.filter(
            user__groups=event.intra_event_meta.organizer_group,
        )

        self.helper = horizontal_form_helper()
        self.helper.form_tag = False

        layout_parts = [
            'team',
            'person',
        ]

        if instance:
            layout_parts.append(Fieldset(_('Presentation'),
                'job_title',
                'override_job_title',
            ))

            layout_parts.append(Fieldset(_('Additional options'),
                'is_team_leader',
                'is_shown_publicly',
            ))
        else:
            layout_parts.extend((
                'is_team_leader',
                'is_shown_publicly',
            ))

        self.helper.layout = Layout(*layout_parts)

    def save(self, *args, **kwargs):
        ret = super(TeamMemberForm, self).save(*args, **kwargs)

        if 'job_title' in self.cleaned_data:
            signup = self.instance.signup
            signup.job_title = self.cleaned_data['job_title']
            signup.save()
            signup.apply_state()

        return ret

    class Meta:
        model = TeamMember
        fields = (
            'team',
            'person',
            'override_job_title',
            'is_team_leader',
            'is_shown_publicly',
        )


class PrivilegesForm(forms.Form):
    labour = forms.BooleanField(
        required=False,
        label=_('Labour admin'),
        help_text=_(
            'The Labour admin can approve or reject volunteer worker applications, assign workers to shifts etc.'
        ),
    )
    programme = forms.BooleanField(
        required=False,
        label=_('Programme admin'),
        help_text=_(
            'The Programme admin can approve or reject programme offers, modify the event programme schedule etc.'
        ),
    )
    tickets = forms.BooleanField(
        required=False,
        label=_('Tickets admin'),
        help_text=_(
            'The Tickets admin can view, cancel and modify ticket orders and exchange electronic tickets.'
        ),
    )
    badges = forms.BooleanField(
        required=False,
        label=_('Badges admin'),
        help_text=_('The Badges admin can add and revoke badges and export entrance lists.'),
    )
    intra = forms.BooleanField(
        required=False,
        label=_('Intra admin'),
        help_text=_('The Intra admin can assign organizers to teams and manage these privileges.'),
    )

    def __init__(self, *args, **kwargs):
        assert 'initial' not in kwargs

        self.event = kwargs.pop('event')
        self.user = kwargs.pop('user')
        self.active_apps = self.event.intra_event_meta.get_active_apps()

        kwargs['initial'] = dict(
            (app_label, self.event.app_event_meta(app_label).is_user_in_admin_group(self.user))
            for app_label in self.active_apps
        )

        super(PrivilegesForm, self).__init__(*args, **kwargs)

        for app_label in SUPPORTED_APPS:
            if app_label not in self.active_apps:
                del self.fields[app_label]

        self.helper = horizontal_form_helper()
        self.helper.form_tag = False

        layout_fields = [indented_without_label(app_label) for app_label in self.active_apps]
        self.helper.layout = Layout(Fieldset(_('Privileges'), *layout_fields))

    def save(self):
        if 'background_tasks' in settings.INSTALLED_APPS:
            from .tasks import privileges_form_save
            privileges_form_save.delay(self.event.id, self.user.id, self.cleaned_data)
        else:
            self._save(self.event, self.user, self.cleaned_data)

    @classmethod
    def _save(cls, event, user, cleaned_data):
        for app_label in event.intra_event_meta.get_active_apps():
            ensure_user_is_member_of_group(
                user,
                event.app_event_meta(app_label).admin_group,
                cleaned_data[app_label]
            )

    @property
    def signup(self):
        from labour.models import Signup
        return Signup.objects.filter(event=self.event, person=self.user.person).first()
