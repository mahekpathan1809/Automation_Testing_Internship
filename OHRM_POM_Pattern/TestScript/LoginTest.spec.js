import { test, expect } from '@playwright/test';
import { LoginPageActions } from '../PageActions/LoginPageActions.js';

test('OrangeHRM Login Test', async ({ page }) => {

    const login = new LoginPageActions(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/');

    await login.loginToApplication('Admin', 'admin123');

    await expect(page).toHaveURL(/dashboard/);

});