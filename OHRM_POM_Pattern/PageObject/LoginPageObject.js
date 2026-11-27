
import { BaseClass } from '../BaseLibrary/BaseClass.js';

export class LoginPageObject extends BaseClass {

    constructor(page, expect) {
        super(page, expect);

        // Username locator
        this.username = "//input[@name='username']";

        // Password locator
        this.password = "//input[@name='password']";

        // Login button locator
        this.loginbutton = "//button[@type='submit']";
    }

    // Enter username
    async enterUsername(username) {
        await this.page.locator(this.username).fill(username);
    }

    // Enter password
    async enterPassword(password) {
        await this.page.locator(this.password).fill(password);
    }

    // Click login button
    async clickLoginButton() {
        await this.page.locator(this.loginbutton).click();
    }
}
