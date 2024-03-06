export const STUDENT_REGISTRATION_PAGE_LOCATORS = {
    BTN_FORMS_LOCATOR: '//h5[text()="Forms"]',
    BTN_PRACTICE_FORM_LOCATOR :"//div[contains(@class, 'show')]/ul/li//span[text()='Practice Form']",
    TXT_FIRST_NAME_LOCATOR:'#firstName',
    TXT_LAST_NAME_LOCATOR:'#lastName',
    TXT_EMAIL_LOCATOR:'#userEmail',
    CHK_MALE_GENDER_LOCATOR:'#gender-radio-1',
    TXT_PHONE_NUMBER_LOCATOR:'#userNumber',
    DTP_DATE_OF_BIRTH_LOCATOR:'#dateOfBirthInput',
    DDL_MONTH_DOB_LOCATOR:'//select[contains(@class, "month-select")]',
    DDL_YEAR_DOB_LOCATOR:'//select[contains(@class, "year-select")]',
	BTN_DAY_DOB_LOCATOR: (day) => `//div[contains(@class, "day--0${day}")]`,
    CBO_SUBJECT_LOCATOR:'#subjectsContainer',
    CHK_SPORTS_HOBBY_LOCATOR:'#hobbies-checkbox-1',
    CHK_READING_HOBBY_LOCATOR:'#hobbies-checkbox-2',
    CHK_MUSIC_HOBBY_LOCATOR:'#hobbies-checkbox-3',
    DLG_UPLOAD_PICTURE_LOCATOR:'#uploadPicture',
    TXA_ADDRESS_LOCATOR:'#currentAddress',
    CBO_STATE_LOCATOR:'#state',
    CBO_CITY_LOCATOR:'#city',
    BTN_SUBMIT_LOCATOR:'#submit',
    MSG_SUBMIT_LOCATOR:'#example-modal-sizes-title-lg',
    TXT_STUDENT_INFORMATIONS_LOCATOR: "//div[@class='modal-body']//tbody/tr"
}