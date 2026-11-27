export class BaseClass {

    constructor(page) {
        this.page = page;
    }

    async launchbrowserandgotourl(url) {
        await this.page.goto(url, {
            waitUntil: 'commit',
            timeout: 120000
        });
    }

    async closebrowser() {
        await this.page.close();
    }
}