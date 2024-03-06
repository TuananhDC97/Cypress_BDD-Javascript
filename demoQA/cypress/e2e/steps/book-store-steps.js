import { BookstoreHelper } from '../../utils/data-precondition/bookstore-helper'
import { UserToken } from '../../utils/user-token'
import BookStorePage from '../../page-objects/book-store-page'
import { BOOK_NAMES, BOOKS_ISBN } from '../../constants/common-constants'

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const basicAuth = UserToken.getBasicAuth(Cypress.env('username'), Cypress.env('password'))

beforeEach(() => {
  BookStorePage.goToBookStorePage()
});

  Given("the user should not have any book in collection.", () => {
    BookstoreHelper.deleteBooksFromCollection(basicAuth, Cypress.env('userId'))
  })

  Given("the user already have book in collection.", () => {
    BookstoreHelper.addBooksToCollection(basicAuth, Cypress.env('userId'), BOOKS_ISBN.GIT_POCKET_GUIDE_ISBN)
  })

  Given("the user logs into application.", (dataTable) => {
    dataTable.hashes().forEach((row) => {
      BookStorePage.login(row.username, row.password);
  })
});

  Given("there are books named {string} and {string}.", (bookName1, bookName2) => {
    BookStorePage.elements.lnkBook(bookName1).should('be.visible');
    BookStorePage.elements.lnkBook(bookName2).should('be.visible');
  })

  Given("there is a book named {string}.", (bookName) => {
    BookStorePage.elements.lnkBook(bookName).should('be.visible');
  })

  When("the user is on Book Store page.", () => {
    BookStorePage.verifyUserInBookStorePage()
  });

  When("the user is on the Profile page.", () => {
    BookStorePage.goToProfile()
  });

  When("the user search book {string}.", (bookName) => {
    BookStorePage.elements.txtSearchBox().type(bookName);
  });

  When("the user clicks on Delete icon.", () => {
    BookStorePage.elements.btnDeleteBook().invoke('click');
  });

  When("the user clicks on OK button.", () => {
    BookStorePage.elements.btnConfirmDeleteBook().click()
  });

  When("the user clicks on OK button of alert {string}.", (deleteMessage) => {
    cy.on('window:alert',(message)=>{
        expect(message).to.equal(deleteMessage);
      })
    });

  When("the user inputs book name {string} or {string}.", (bookName1, bookName2) => {
    BookStorePage.elements.txtSearchBox().type(bookName1);
  });

  When("the user selects a book {string}.", (bookName) => {
    BookStorePage.selectBook(bookName);
  });

  When("the user clicks on Add To Your Collection.", () => {
    BookStorePage.addBookToCollection();
  });

  Then("an alert {string} is shown.", (addMessage) => {
    cy.on('window:alert',(message)=>{
      expect(message).to.equal(addMessage);
    })
  });

  Then("book is shown in your profile.", () => {
    BookStorePage.goToProfile()
    BookStorePage.elements.lnkBook(BOOK_NAMES.GIT_POCKET_GUIDE).should('have.text', BOOK_NAMES.GIT_POCKET_GUIDE);
  });

  Then("all books match with input criteria will be displayed.", () => {
    BookStorePage.elements.lnkBook(BOOK_NAMES.LEARNING_JAVASCRIPT_DESIGN_PATTERNS_BOOK).should('have.text', BOOK_NAMES.LEARNING_JAVASCRIPT_DESIGN_PATTERNS_BOOK);
    BookStorePage.elements.lnkBook(BOOK_NAMES.DESIGNING_EVOLABLE_WEB_APIS_ASPNET_BOOK).should('have.text', BOOK_NAMES.DESIGNING_EVOLABLE_WEB_APIS_ASPNET_BOOK);
  });