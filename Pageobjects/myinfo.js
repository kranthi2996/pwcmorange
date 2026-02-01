class myinfo {
    
    constructor(page) {
        this.page = page;
        this.myInfoTab = page.locator('a[href="/web/index.php/pim/viewMyDetails"]');
        this.personalDetailsHeader = page.locator('h6:has-text("Personal Details")');
    }      
        
}
module.exports = { myinfo };        