# Cucumber Playwright Automation Framework

This project is a JavaScript automation framework using Cucumber and Playwright for end-to-end testing of the [Playwright Movies App](https://debs-obrien.github.io/playwright-movies-app?category=Popular&page=1).

## Project Structure
- `features/` - Contains feature files and step definitions
- `features/popular_movies.feature` - Example feature for testing the popular movies page
- `features/step_definitions/` - Step definitions for Cucumber
- `.github/copilot-instructions.md` - Copilot custom instructions

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Run tests:
   ```sh
   npx cucumber-js
   ```

## Customization
- Add more feature files in the `features` folder.
- Add or update step definitions in `features/step_definitions`.

## Requirements
- Node.js >= 14

---

This framework uses Playwright for browser automation and Cucumber for BDD-style test scenarios.
