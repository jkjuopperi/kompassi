import pytest
import yaml

from .models import Field
from .utils import process_form_data, FieldWarning


def test_process_form_data():
    fields = [
        Field.model_validate(field)
        for field in yaml.safe_load(
            """
            # single line text fields
            - type: SingleLineText
              slug: singleLineText
              title: Single line text
            - type: SingleLineText
              slug: singleLineTextRequiredMissing
              title: A required field that is missing
              required: true
            - type: SingleLineText
              slug: singleLineTextHtmlNumber
              title: A number field
              htmlType: number

            # single checkbox fields
            - type: SingleCheckbox
              slug: thisIsFalse
              title: This is false
            - type: SingleCheckbox
              slug: thisIsTrue
              title: This is true
            - type: SingleCheckbox
              slug: singleCheckboxRequiredMissing
              title: A required field that is missing
              required: true

            # single select
            - type: SingleSelect
              slug: singleSelect
              title: Single select
              choices: &choices
                - slug: choice1
                  title: Choice 1
                - slug: choice2
                  title: Choice 2
                - slug: choice3
                  title: Choice 3
            - type: SingleSelect
              slug: dropdown
              title: Dropdown
              helpText: A dropdown menu shouldn't be handled any differently
              presentation: dropdown
              choices: *choices
            - type: SingleSelect
              slug: singleSelectRequiredMissing
              title: A required field that is missing
              required: true
              choices: *choices
            - type: SingleSelect
              slug: singleSelectInvalidChoice
              title: A required field with an invalid choice selected
              choices: *choices

            # multi select fields
            - type: MultiSelect
              slug: multiSelect
              title: Multi select
              choices: *choices
            - type: MultiSelect
              slug: multiSelectNothingSelected
              title: Multi select with nothing selected
              choices: *choices
            - type: MultiSelect
              slug: multiSelectRequiredMissing
              title: A required field that is missing
              required: true
              choices: *choices

            # radio matrix fields
            - type: RadioMatrix
              slug: radioMatrix
              title: Radio matrix
              questions: &questions
                - slug: foo
                  title: Foo
                - slug: bar
                  title: Bar
              choices: *choices
            - type: RadioMatrix
              slug: radioMatrixRequiredMissing
              title: A required field that has one question missing
              required: true
              questions: *questions
              choices: *choices
            - type: RadioMatrix
              slug: radioMatrixInvalidChoice
              title: A required field with an invalid choice selected
              questions: *questions
              choices: *choices
            - type: RadioMatrix
              slug: radioMatrixInvalidQuestion
              title: A required field with an invalid question
              questions: *questions
              choices: *choices
            """
        )
    ]

    form_data = {
        # single line text fields
        "singleLineText": "Hello world",
        "singleLineTextHtmlNumber": "123",
        # single checkbox fields
        "thisIsTrue": "on",
        # single select fields
        "singleSelect": "choice1",
        "dropdown": "choice2",
        "singleSelectInvalidChoice": "choice666",
        # multi select fields
        "multiSelect.choice1": "on",
        "multiSelect.choice3": "on",
        # radio matrix fields
        "radioMatrix.foo": "choice1",
        "radioMatrix.bar": "choice2",
        "radioMatrixRequiredMissing.foo": "choice3",
        "radioMatrixInvalidChoice.foo": "choice666",
        "radioMatrixInvalidChoice.bar": "choice1",
        "radioMatrixInvalidQuestion.foo": "choice2",
        "radioMatrixInvalidQuestion.notFoo": "choice1",
        "radioMatrixInvalidQuestion.bar": "choice2",
    }

    expected_values = dict(
        # single line text fields
        singleLineText="Hello world",
        singleLineTextRequiredMissing="",
        singleLineTextHtmlNumber=123,
        # single checkbox fields
        thisIsTrue=True,
        thisIsFalse=False,
        # single select fields
        singleSelect="choice1",
        dropdown="choice2",
        singleSelectInvalidChoice="choice666",  # NOTE! See comment in forms/utils.py:process_form_data
        singleCheckboxRequiredMissing=False,
        singleSelectRequiredMissing="",
        # multi select fields
        multiSelect=["choice1", "choice3"],
        multiSelectNothingSelected=[],
        multiSelectRequiredMissing=[],
        # radio matrix fields
        radioMatrix={
            "foo": "choice1",
            "bar": "choice2",
        },
        radioMatrixRequiredMissing={
            "foo": "choice3",
        },
        radioMatrixInvalidChoice={
            "foo": "choice666",
            "bar": "choice1",
        },
        radioMatrixInvalidQuestion={
            "foo": "choice2",
            "notFoo": "choice1",
            "bar": "choice2",
        },
    )

    expected_warnings = dict(
        # single line text fields
        singleLineTextRequiredMissing=[FieldWarning.REQUIRED_MISSING],
        # single checkbox fields
        singleCheckboxRequiredMissing=[FieldWarning.REQUIRED_MISSING],
        # single select fields
        singleSelectRequiredMissing=[FieldWarning.REQUIRED_MISSING],
        singleSelectInvalidChoice=[FieldWarning.INVALID_CHOICE],
        # multi select fields
        multiSelectRequiredMissing=[FieldWarning.REQUIRED_MISSING],
        # radio matrix fields
        radioMatrixRequiredMissing=[FieldWarning.REQUIRED_MISSING],
        radioMatrixInvalidChoice=[FieldWarning.INVALID_CHOICE],
        radioMatrixInvalidQuestion=[FieldWarning.INVALID_CHOICE],
    )

    values, warnings = process_form_data(fields, form_data)

    assert values == expected_values
    assert warnings == expected_warnings