import { STUDENT_REGISTRATION_PAGE_LOCATORS } from './locators/student-registration-locators'
require('@cypress/xpath');

class StudentRegistrationPage {
    elements ={
      btnForms : () => cy.xpath(STUDENT_REGISTRATION_PAGE_LOCATORS.BTN_FORMS_LOCATOR),
      btnPracticeForm : () => cy.xpath(STUDENT_REGISTRATION_PAGE_LOCATORS.BTN_PRACTICE_FORM_LOCATOR),
      txtFirstName : () => cy.get(STUDENT_REGISTRATION_PAGE_LOCATORS.TXT_FIRST_NAME_LOCATOR),
      txtLastName : () => cy.get(STUDENT_REGISTRATION_PAGE_LOCATORS.TXT_LAST_NAME_LOCATOR),
      txtEmail : () => cy.get(STUDENT_REGISTRATION_PAGE_LOCATORS.TXT_EMAIL_LOCATOR),
      chkMaleGender : () => cy.get(STUDENT_REGISTRATION_PAGE_LOCATORS.CHK_MALE_GENDER_LOCATOR),
      txtPhoneNumber : () => cy.get(STUDENT_REGISTRATION_PAGE_LOCATORS.TXT_PHONE_NUMBER_LOCATOR),
      dtpDateOfBirth : () => cy.get(STUDENT_REGISTRATION_PAGE_LOCATORS.DTP_DATE_OF_BIRTH_LOCATOR),
      ddlMonthDateOfBirth : () => cy.xpath(STUDENT_REGISTRATION_PAGE_LOCATORS.DDL_MONTH_DOB_LOCATOR),
      ddlYearDateOfBirth : () => cy.xpath(STUDENT_REGISTRATION_PAGE_LOCATORS.DDL_YEAR_DOB_LOCATOR),
      btnDayDateOfBirth: (day) => cy.xpath(STUDENT_REGISTRATION_PAGE_LOCATORS.BTN_DAY_DOB_LOCATOR(day)),
      cboSubject : () => cy.get(STUDENT_REGISTRATION_PAGE_LOCATORS.CBO_SUBJECT_LOCATOR),
      chkSports : () => cy.get(STUDENT_REGISTRATION_PAGE_LOCATORS.CHK_SPORTS_HOBBY_LOCATOR),
      chkReading : () => cy.get(STUDENT_REGISTRATION_PAGE_LOCATORS.CHK_READING_HOBBY_LOCATOR),
      chkMusic : () => cy.get(STUDENT_REGISTRATION_PAGE_LOCATORS.CHK_MUSIC_HOBBY_LOCATOR),
      dlgPictureUpload : () => cy.get(STUDENT_REGISTRATION_PAGE_LOCATORS.DLG_UPLOAD_PICTURE_LOCATOR),
      txaAddress : () => cy.get(STUDENT_REGISTRATION_PAGE_LOCATORS.TXA_ADDRESS_LOCATOR),
      cboState : () => cy.get(STUDENT_REGISTRATION_PAGE_LOCATORS.CBO_STATE_LOCATOR),
      cboCity : () => cy.get(STUDENT_REGISTRATION_PAGE_LOCATORS.CBO_CITY_LOCATOR),
      btnSubmit : () => cy.get(STUDENT_REGISTRATION_PAGE_LOCATORS.BTN_SUBMIT_LOCATOR),
      txtSubmit : () => cy.get(STUDENT_REGISTRATION_PAGE_LOCATORS.MSG_SUBMIT_LOCATOR),
      txtStudentInformations : () => cy.xpath(STUDENT_REGISTRATION_PAGE_LOCATORS.TXT_STUDENT_INFORMATIONS_LOCATOR)
    }

    goToStudenRegistrationPage() {
      cy.visit(Cypress.config().studentFormUrl);
    }
  
    inputFullInformations(firstName, lastName, randomEmail, phoneNumber, monthDoB, yearDoB, dayDoB, subject,
       address, state, city) {
      const picturePath = 'cypress/fixtures/demo.jpg';

      this.elements.txtFirstName().type(firstName)
      this.elements.txtLastName().type(lastName);
      this.elements.txtEmail().type(randomEmail);
      this.elements.chkMaleGender().invoke('click');
      this.elements.txtPhoneNumber().type(phoneNumber);
      this.elements.dtpDateOfBirth().click();
      this.elements.ddlMonthDateOfBirth().select(monthDoB);
      this.elements.ddlYearDateOfBirth().select(yearDoB);
      this.elements.btnDayDateOfBirth(dayDoB).click();
      this.elements.cboSubject().type(subject + '{enter}');
      this.elements.chkSports().invoke('click');
      this.elements.chkReading().invoke('click');
      this.elements.chkMusic().invoke('click');
      this.elements.dlgPictureUpload().selectFile(picturePath);
      this.elements.txaAddress().type(address);
      this.elements.cboState().click()
      .then(() => {
        cy.contains('div', state).click();
      });
      this.elements.cboCity().click()
      .then(() => {
        cy.contains('div', city).click();
      })
    }

    inputRequiredInformationsOnly(firstName, lastName, randomEmail, phoneNumber) {
     this.elements.txtFirstName().type(firstName);
     this.elements.txtLastName().type(lastName);
     this.elements.txtEmail().type(randomEmail);
     this.elements.chkMaleGender().invoke('click');
     this.elements.txtPhoneNumber().type(phoneNumber);
   }
  
    clickSubmitButton() {
      this.elements.btnSubmit().click();
    }
  }

  module.exports = new StudentRegistrationPage();