Feature: Done ticket
  Scenario: Accept one tickets
    Given I am logged in as supplier 16
    When I click on the In Progress tab
    And I click done ticket with id 10
    Then The page should show 2 in progress tickets

    Given I am logged in as supplier 8
    When I click on the In Progress tab
    And I click done ticket with id 13
    Then The page should show 0 in progress tickets

  Scenario: Done several in progress tickets
    Given I am logged in as supplier 11
    When I click on the In Progress tab
    And I click done ticket with id 14
    And I click done ticket with id 18
    Then The page should show 3 in progress tickets
