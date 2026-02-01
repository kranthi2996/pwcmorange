const { Before, After, setDefaultTimeout, } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

setDefaultTimeout(60 * 1000);

Before(async function () {
  console.log("browser is Initialized");
  this.browser = await chromium.launch({ 
    headless: false,
    devtools: true,  // Opens DevTools for debugging
    slowMo: 1000     // Slow down by 1 second to see actions
  });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  // // Set viewport for better visibility
  // await this.page.setViewportSize({ width: 1280, height: 720 });
  console.log("browser Page created");
});

After(async function () {
  console.log("✓ After: Closing browser");
  if (this.browser) {
    await this.browser.close();
  }
});