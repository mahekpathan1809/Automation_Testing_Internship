
import { LoginPageObject } from '../PageObject/LoginPageObject.js';

export class LoginPageActions extends LoginPageObject {

    constructor(page, expect) {
        super(page, expect);
    }

    // Complete login operation
    async loginToApplication() {

        // Open OrangeHRM
        await this.page.goto(
            'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
        );

        // Enter username
        await this.enterUsername('Admin');

        // Enter password
        await this.enterPassword('admin123');

        // Click login
        await this.clickLoginButton();
    }
}
