const { Given, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { LoginPage } = require("../../Pageobjects/loginpage");
const { expect } = require("allure-playwright");
/**
 * @typedef {import('@playwright/test').Page} Page
 */

setDefaultTimeout(30 * 1000);

Given("Launch the HRM Portal", async function () {
  const loginPage = new LoginPage(this.page);
  this.loginPage = loginPage;
  await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await this.page.waitForLoadState('domcontentloaded');
  console.log('portal Launched')
});

Then("Enter the Valid Credentails {string} and {string}", async function (username, password) {
  await this.loginPage.username.fill(username);
  console.log("Username filled: " + username);
  await this.loginPage.password.fill(password);
  console.log("Password filled: " + password);
  console.log("Credentials entered successfully");
  await this.loginPage.Login.click();
});


Then('Assert the success Login {string}', async function (text) {
  await expect(this.loginPage.Dashboard).toHaveText(text)
});

Then('Click on the Forget button', async function () {
  await this.loginPage.reset.click();
})

Then('Enter the Username details and Click on Reset', async function () {
  await this.loginPage.username.fill("Admin");
  await this.loginPage.Login.click();
});

Then("Assert the Reset URL", async function () {
  await expect(this.loginPage.resetMessage).toHaveText("Reset Password link sent successfully");
});

Then('Click on the Logout button', async function () {
  await this.page.locator(".oxd-userdropdown-tab").click();
  await this.page.getByText("Logout").click();
});

Then("Assert the Logout URL", async function () {
  await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
});