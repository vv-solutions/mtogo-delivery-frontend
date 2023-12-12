Feature: Accept ticket
  Scenario: Accept one tickets
    Given I am logged in as supplier 15
    When I click on Pending tickets
    And I click on accept ticket with id 2
    And I fill in a date
    And I click on confirm
    And I click on the In Progress tab
    Then The page should show 1 in progress tickets

    Given I am logged in as supplier 9
    When I click on Pending tickets
    And I click on accept ticket with id 9
    And I fill in a date
    And I click on confirm
    And I click on the In Progress tab
    Then The page should show 1 in progress tickets

  Scenario: Accept several pending tickets
    Given I am logged in as supplier 10
    When I click on Pending tickets
    And I click on accept ticket with id 4
    And I fill in a date
    And I click on confirm
    And I click on accept ticket with id 8
    And I fill in a date
    And I click on confirm
    And I click on the In Progress tab
    Then The page should show 2 in progress tickets
