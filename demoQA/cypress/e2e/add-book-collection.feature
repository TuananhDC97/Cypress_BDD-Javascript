Feature: Book Store Functionality

Background: No book in collection
    Given the user should not have any book in collection.

@bookstore @addbook
Scenario: Add a book to your collection
    Given the user logs into application.
    |   username        |   password   |
    |   TuanAnh_SD4748  |   @Abc1234   |
    When the user is on Book Store page.
    When the user selects a book 'Git Pocket Guide'.
    When the user clicks on Add To Your Collection.
    Then an alert 'Book added to your collection.' is shown.
    Then book is shown in your profile.