const { Given, Then, Before, setDefaultTimeout } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { myinfo } = require("../../Pageobjects/myinfo");

/**
 * @typedef {import('@playwright/test').Page} Page
 */

Before(async function () {
  this.infopage = new myinfo(this.page);
});


Then("Navigate to My Info section", async function () {
  await this.infopage.myInfoTab.click();
  console.log("Navigated to My Info section");
});
