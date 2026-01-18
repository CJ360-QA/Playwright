Feature: login Test

Background:
  Given User is on login page
  
Scenario: Valid login test
    When User enters valid username and password
    Then User should be logged in successfully

Scenario Outline: Invalid login test
    When User enters "<username>" and "<password>"
    Then User should see an error message

    Examples:
      | username     | password   |
      | invalidUser1 | wrongPass1 |
      | invalidUser2 | wrongPass2 |
      | invalidUser3 | wrongPass3 |