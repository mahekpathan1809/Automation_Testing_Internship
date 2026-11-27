export class BaseClass {
    constructor (page,expect){
        this.page = page;
        this.expect = expect;
    }

    async launchBrowserandGotoUrl(url){
        await this.page.goto(url);
    }

    async WaitForSomeTime(time){
        await this.page.waitForTimeout(time)

    }

    async CloseBrowser(){
        await this.page.close();
    }
    
}