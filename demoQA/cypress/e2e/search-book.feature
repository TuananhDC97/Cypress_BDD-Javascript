Feature: Book Store Functionality

@bookstore @searchbook
Scenario: Search book with multiple results
    Given there are books named 'Learning JavaScript Design Patterns' and 'Designing Evolvable Web APIs with ASP.NET'.
    When the user is on Book Store page.
    When the user inputs book name 'Design' or 'design'.
    Then all books match with input criteria will be displayed.