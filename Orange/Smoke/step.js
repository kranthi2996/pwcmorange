const { Given, Then, setDefaultTimeout } = require("@cucumber/cucumber");


setDefaultTimeout(60 * 1000);

Given("Launch the HRM Portal", async function() {
  await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await this.page.waitForLoadState('domcontentloaded');
  console.log('portal Launched')

});

Then("Enter the Valid Credentails {string} and {string}", async function (username, password)  {
        await this.page.locator("input[placeholder='Username']").type(username);
        await this.page.locator("input[type='password']").type(password);
        console.log("Credentials entered successfully");
});