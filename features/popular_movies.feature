Feature: Popular Movies Page
  As a user
  I want to view the list of popular movies
  So that I can choose a movie to watch

  Scenario: User visits the popular movies page 1
    Given I am on the popular movies page 1
    Then I should see a list of movies

  Scenario: User visits the popular movies page 2
    Given I am on the popular movies page 2
    Then I should see a list of movies

  Scenario: User visits the popular movies page 3
    Given I am on the popular movies page 3
    Then I should see a list of movies

  Scenario: Dummy test for CI
    Given I open the Playwright homepage
    Then the title should contain "Playwright"
