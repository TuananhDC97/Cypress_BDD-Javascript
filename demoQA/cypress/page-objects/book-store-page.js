import { BOOK_STORE_PAGE_LOCATORS } from './locators/book-store-locators'
require('@cypress/xpath');

class BookStorePage {
    elements ={
      btnBookStore : () => cy.xpath(BOOK_STORE_PAGE_LOCATORS.BTN_BOOK_STORE_LOCATOR),
      btnLogin : () => cy.get(BOOK_STORE_PAGE_LOCATORS.BTN_LOGIN_LOCATOR),
      txtUsername : () => cy.get(BOOK_STORE_PAGE_LOCATORS.TXT_USERNAME_LOCATOR),
      txtPassword : () => cy.get(BOOK_STORE_PAGE_LOCATORS.TXT_PASSWORD_LOCATOR),
      lnkBook : (bookName) => cy.xpath(BOOK_STORE_PAGE_LOCATORS.LNK_BOOK_LOCATOR(bookName)),
      btnAddToYourCollection : () => cy.xpath(BOOK_STORE_PAGE_LOCATORS.BTN_ADD_TO_YOUR_COLLECTION_LOCATOR),
      btnProfile : () => cy.xpath(BOOK_STORE_PAGE_LOCATORS.BTN_PROFILE_LOCATOR),
      btnDeleteBook : () => cy.get(BOOK_STORE_PAGE_LOCATORS.BTN_DELETE_BOOK_LOCATOR),
      btnConfirmDeleteBook : () => cy.get(BOOK_STORE_PAGE_LOCATORS.BTN_CONFIRM_DELETE_BOOK_LOCATOR),
      txtSearchBox : () => cy.get(BOOK_STORE_PAGE_LOCATORS.TXT_SEARCH_BOX_LOCATOR),
      txtUsernameLoggedIn : () => cy.get(BOOK_STORE_PAGE_LOCATORS.TXT_USERNAME_LOGGED_IN_LOCATOR)
    }

    goToBookStorePage() {
      cy.visit(Cypress.config().bookStoreUrl)
    }

    verifyUserInBookStorePage(){
      cy.url().should('eq', Cypress.config().bookStoreUrl);
    }
  
    login(username, password) {
      this.elements.btnLogin().click()
      this.elements.txtUsername().type(username);
      this.elements.txtPassword().type(password);
      this.elements.btnLogin().click();
      this.elements.txtUsernameLoggedIn().should('be.visible');
    }
  
    addBookToCollection() {
      this.elements.btnAddToYourCollection().click();
    }

    selectBook(bookName){
      this.elements.lnkBook(bookName).click();
    }

    goToProfile() {
      this.elements.btnProfile().click();
    }

    searchBook(bookName) {
      this.elements.txtSearchBox().type(bookName);
    }

    deleteBook() {
        this.elements.btnDeleteBook().invoke('click');
        this.elements.btnConfirmDeleteBook().click()
    }
  }

  module.exports = new BookStorePage();