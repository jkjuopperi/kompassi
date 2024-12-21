from typing import Self

import graphene
from django import forms as django_forms
from graphene.types.generic import GenericScalar

from access.cbac import graphql_check_instance
from core.utils.form_utils import camel_case_keys_to_snake_case

from ...models.order import Order
from ..order_limited import LimitedOrderType


class OrderForm(django_forms.ModelForm):
    class Meta:
        model = Order
        fields = ("first_name", "last_name", "email", "phone")

    @classmethod
    def from_form_data(cls, order: Order, form_data: dict[str, str]) -> Self:
        form_data = camel_case_keys_to_snake_case(form_data)
        return cls(form_data, instance=order)


class UpdateOrderInput(graphene.InputObjectType):
    event_slug = graphene.String(required=True)
    order_id = graphene.String(required=True)
    form_data = GenericScalar(required=True)


class UpdateOrder(graphene.Mutation):
    class Arguments:
        input = UpdateOrderInput(required=True)

    order = graphene.Field(LimitedOrderType)

    @staticmethod
    def mutate(
        root,
        info,
        input: UpdateOrderInput,
    ):
        order = Order.objects.get(event__slug=input.event_slug, id=input.order_id)
        form_data: dict[str, str] = input.form_data  # type: ignore

        graphql_check_instance(order, info, "self", "update")

        form = OrderForm.from_form_data(order, form_data)
        if not form.is_valid():
            raise django_forms.ValidationError(form.errors)  # type: ignore

        form.save()

        return UpdateOrder(order=order)  # type: ignore