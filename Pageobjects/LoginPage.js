/**
 * @typedef {import('@playwright/test').Page} Page
 */

class LoginPage{

    /**
     * @param {Page} page
     */
    constructor(page){
   
     this.username=page.locator("input[placeholder='Username']");
     this.password= page.locator("input[placeholder='Password']");
     this.Login=page.locator("button[type='submit']");
     this.Dashboard=page.locator(".oxd-topbar-header-breadcrumb-module");
     this.reset=page.getByText("Forgot your password?")
     this.resetMessage=page.getByText("Reset Password link sent successfully");
    }
}
module.exports={LoginPage};