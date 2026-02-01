const { Given, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const{LoginPage}=require("../../Pageobjects/LoginPage");

setDefaultTimeout(10 * 1000);

Given("Launch the HRM Portal", async function() {
  const loginPage = new LoginPage(this.page);
  this.loginPage = loginPage;
  await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  await this.page.waitForLoadState('domcontentloaded');
  console.log('portal Launched')
});

Then("Enter the Valid Credentails {string} and {string}", async function (username, password)  {
        try {
          // Wait for username field to be ready
          await this.loginPage.username.waitFor({ state: 'visible', timeout: 10000 });
          await this.loginPage.username.click();
          await this.loginPage.username.fill(username);
          console.log("Username filled: " + username);
          
          // Wait for password field to be ready
          await this.loginPage.password.waitFor({ state: 'visible', timeout: 10000 });
          await this.loginPage.password.click();
          await this.loginPage.password.fill(password);
          console.log("Password filled: " + password);
          
          console.log("Credentials entered successfully");
        } catch (error) {
          console.error("ERROR in credential entry:", error.message);
          throw error;
        }
});