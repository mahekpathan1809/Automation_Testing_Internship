
import { test, expect } from '@playwright/test';

import { LoginPageActions } from '../PageActions/LoginPageActions.js';
import { AdminPageActions } from '../PageActions/AdminPageActions.js';

test.describe('Admin Module Tests', () => {

    test('Verify Add, Search and Delete User', async ({ page }) => {

        // 1. Login to OrangeHRM
        const loginAction = new LoginPageActions(page, expect);

        await loginAction.loginToApplication();

        // 2. Create Admin Action object
        const adminAction = new AdminPageActions(page, expect);

        // 3. Click Admin menu
        await adminAction.clickOnAdminMenu();

        // 4. Click Add button
        await adminAction.clickAddButton();

        // 5. Select User Role
        await adminAction.selectUserRole('Admin');

        // 6. Enter Employee Name
        await adminAction.enterEmployeeName('a');

        // 7. Select Status
        await adminAction.selectStatus('Enabled');

        // 8. Generate unique username
        const testUsername =
            'User_' + Math.floor(Math.random() * 100000);

        // 9. Enter Username
        await adminAction.enterUsername(testUsername);

        // 10. Enter Password
        await adminAction.enterPassword('Password@123');

        // 11. Confirm Password
        await adminAction.enterConfirmPassword('Password@123');

        // 12. Save User
        await adminAction.clickSaveButton();

        // 13. Search newly created user
        await adminAction.enterUsername(testUsername);

        await adminAction.clickSearchButton();

        // 14. Delete the user
        await adminAction.clickDeleteButton();

        // 15. Verify successful deletion
        await expect(adminAction.successToast).toBeVisible();

    });

});
