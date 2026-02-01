const { Before, After, setDefaultTimeout, } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

setDefaultTimeout(60 * 1000);

Before(async function () {
  console.log("browser is Initialized");
  this.browser = await chromium.launch({ headless: true });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  console.log("browser Page created");
});

After(async function () {
  console.log("✓ After: Closing browser");
});