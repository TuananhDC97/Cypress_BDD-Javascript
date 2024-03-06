Feature: Book Store Functionality

Background: Have book in collection
    Given the user already have book in collection.

@bookstore @deletebook
Scenario: Delete book successfully
    Given there is a book named 'Git Pocket Guide'.
    When the user logs into application.
    |   username        |   password   |
    |   TuanAnh_SD4748  |   @Abc1234   |
    When the user is on the Profile page.
    When the user clicks on Delete icon.
    When the user clicks on OK button.
    When the user clicks on OK button of alert 'Book deleted.'.