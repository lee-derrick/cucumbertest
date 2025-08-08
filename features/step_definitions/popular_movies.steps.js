
const { Given, Then, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

Given('I open the Playwright homepage', async function () {
  await page.goto('https://playwright.dev/');
});

Then('the title should contain {string}', async function (expected) {
  const title = await page.title();
  if (!title.includes(expected)) {
    throw new Error(`Expected title to contain '${expected}', but got '${title}'`);
  }
});

let browser, page;

Before(async () => {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
});

After(async () => {
  await browser.close();
});


Given('I am on the popular movies page', async function () {
  await page.goto('https://debs-obrien.github.io/playwright-movies-app?category=Popular&page=1');
});

Given('I am on the popular movies page {int}', async function (pageNumber) {
  await page.goto(`https://debs-obrien.github.io/playwright-movies-app?category=Popular&page=${pageNumber}`);
});

Then('I should see a list of movies', async function () {
  const movies = await page.$$('.movie-card');
  if (!movies || movies.length === 0) {
    throw new Error('No movies found on the page');
  }
});
