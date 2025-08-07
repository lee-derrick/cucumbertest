const { Given, Then, Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

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
