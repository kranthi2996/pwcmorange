class LoginPage{

    constructor(page){
   
     this.username=page.locator("input[placeholder='Username']");
     this.password= page.locator("input[placeholder='Password']");
     this.Login=page.locator("button[type='submit']");
    }


}
module.exports={LoginPage};