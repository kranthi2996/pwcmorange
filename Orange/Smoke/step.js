const { Given, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");

setDefaultTimeout(60 * 1000);

let page;
let context;
let browser;

Given("Launch the HRM Portal", async function() {
    browser = await chromium.launch({ headless: true });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForLoadState();
});

Then("Enter the Valid Credentails {string} and {string}", async function (username, password)  {
    await page.locator("input[placeholder='Username']").type(username);
    await page.locator("input[type='password']").type(password);
    await page.close();
    await context.close();
    await browser.close();
});