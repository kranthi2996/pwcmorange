class login{

    constructor(page){
     this.username=page.Locator("#username");
     this.password= page.Locator("#password");
     this.Login=page.Locator("button:hastext[Login]");
    }
}

module.exports={login};