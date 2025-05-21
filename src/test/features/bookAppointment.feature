Feature: User can book an appointment

  Background:
    Given User navigates to the application
    And User click on the sign in button

    Scenario: User login with valid credentials
        When User enters valid username and password
        And User click on the login button
        Then User should be redirected to the home page
        Then user go to the doctor details page
        Then user select a date and time slot
        Then user click on the procced button
        Then user click on the cofirm booking button
        And user should see the booking confirmation message 

    
        