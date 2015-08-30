# encoding: utf-8

from django.shortcuts import render

from django.shortcuts import render, get_object_or_404, redirect
from django.utils import timezone
from django.views.decorators.http import require_http_methods, require_GET
from django.db.models import Count
from core.utils import url, initialize_form

from core.batches_view import batches_view
from .models import VoteCategory, Vote, Hotword, Nominee
from .helpers import sms_admin_required

@sms_admin_required
@require_GET
def sms_admin_dashboard_view(request, vars, event):

    vars.update(
        hotwords=Hotword.objects.all(),
        categories=VoteCategory.objects.all(),
        nominees=Nominee.objects.values('category','name').annotate(votes=Count('vote__vote__category'))
    )
    
    return render(request, 'sms_admin_vote_dashboard_view.jade', vars)



def sms_admin_menu_items(request, event):
    dashboard_url = url('sms_admin_dashboard_view', event.slug)
    dashboard_active = request.path == dashboard_url
    dashboard_text = u'Kojelauta'

    return [
        (dashboard_active, dashboard_url, dashboard_text),
    ]

def sms_event_box_context(request, event):
    is_sms_admin = False

    if request.user.is_authenticated():
        is_sms_admin = event.sms_event_meta.is_user_admin(request.user)

    return dict(
        is_sms_admin=is_sms_admin,
    )
