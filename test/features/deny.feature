Feature: Deny pending ticket
  Scenario: Deny one tickets
    Given I am logged in as supplier 15
    When I click on Pending tickets
    And I click on deny ticket with id 2
    Then The page should show 2 pending tickets

    Given I am logged in as supplier 9
    When I click on Pending tickets
    And I click on deny ticket with id 9
    Then The page should show 0 pending tickets

  Scenario: Deny several pending tickets
    Given I am logged in as supplier 10
    When I click on Pending tickets
    And I click on deny ticket with id 4
    And I click on deny ticket with id 8
    Then The page should show 3 pending tickets
