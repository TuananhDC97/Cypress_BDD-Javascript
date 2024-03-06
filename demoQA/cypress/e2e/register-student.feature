@registerstudent
Feature: Student Registration Form

@allfields
Scenario: 1.1 Register student form with all fields successfully
    Given the user is on Student Registration Form.
    When the user input valid data into all fields.
    When the user clicks on Submit button.
    Then a successful message 'Thanks for submitting the form' is shown.
    Then all information of the student form is shown correctly.

@mandatoryfields
Scenario: 1.2 Register student form with mandatory fields successfully
    Given the user is on Student Registration Form.
    When the user input valid data into only required fields.
    When the user clicks on Submit button.
    Then a successful message 'Thanks for submitting the form' is shown.