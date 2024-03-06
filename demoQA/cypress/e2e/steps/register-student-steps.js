import StudentRegistrationPage from "../../page-objects/student-registration-page";
import testData from '../../fixtures/testData.json';

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const { firstName, lastName, phoneNumber, address, 
  city, dayDoB, monthDoB, state, subject, yearDoB } = testData;
const randomEmail = Math.random().toString(12).substring(6) + '@gmail.com';

Given("the user is on Student Registration Form.", () => {
    StudentRegistrationPage.goToStudenRegistrationPage();
  });

  When("the user input valid data into all fields.", () => {
    StudentRegistrationPage.inputFullInformations(firstName, lastName, randomEmail, phoneNumber,
       monthDoB, yearDoB, dayDoB, subject, address, state, city);
  });

  When("the user input valid data into only required fields.", () => {
    StudentRegistrationPage.inputRequiredInformationsOnly(firstName, lastName, randomEmail, phoneNumber);
  });

  When("the user clicks on Submit button.", () => {
    StudentRegistrationPage.clickSubmitButton();
  });

  Then("a successful message {string} is shown.", (message) => {
    StudentRegistrationPage.elements.txtSubmit().should('have.text', message)
  })

  Then("all information of the student form is shown correctly.", () => {
    const expectedStudentInformations = [firstName + " " + lastName, randomEmail, "", phoneNumber, 
      dayDoB + " " + monthDoB + "," + yearDoB, subject, "", 'demo.jpg', address, 
      state + " " + city];

      StudentRegistrationPage.elements.txtStudentInformations().each(($tr, index) => {
        cy.wrap($tr)
        .find("td:nth-child(2)")
        .invoke("text")
        .then((valueText) => {
          expect(valueText).to.equal(expectedStudentInformations[index]);
        });
      });
  });