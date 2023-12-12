Feature: See pending tickets
  Scenario: Several Pending tickets
    Given I am logged in as supplier 15
    When I click on Pending tickets
    Then The page should show 3 pending tickets

    Given I am logged in as supplier 10
    When I click on Pending tickets
    Then The page should show 5 pending tickets

  Scenario: One pending ticket
    Given I am logged in as supplier 9
    When I click on Pending tickets
    Then The page should show 1 pending tickets

  Scenario: No pending tickets
    Given I am logged in as supplier 3
    When I click on Pending tickets
    Then The page should show 0 pending tickets
