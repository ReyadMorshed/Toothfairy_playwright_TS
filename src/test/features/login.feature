Feature: User Authentication tests

  Background:
    Given User navigates to the application
    And User click on the sign in button

    Scenario: User login with valid credentials
        When User enters valid username and password
        And User click on the login button
        Then User should be redirected to the home page

    Scenario: User login with invalid credentials
        When User enters invalid username and password
        And User click on the login button
        Then User should see an error message
        