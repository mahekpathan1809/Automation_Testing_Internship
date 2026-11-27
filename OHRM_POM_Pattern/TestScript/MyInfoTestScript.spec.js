
import { test, expect } from '@playwright/test';

import { LoginPageActions } from '../PageActions/LoginPageActions.js';

import { MyInfoPageActions } from '../PageActions/MyInfoPageActions.js';

test.describe('My Info Module Tests', () => {

    test('Verify My Info Page and Fill Personal Details', async ({ page }) => {

        // 1. Login to OrangeHRM
        const loginAction = new LoginPageActions(page, expect);

        await loginAction.loginToApplication();

        // 2. Create My Info Action object
        const myInfoAction = new MyInfoPageActions(page, expect);

        // 3. Click My Info menu
        await myInfoAction.clickOnMyInfoMenu();

        // 4. Enter Full Name
        await myInfoAction.enterFullName(
            'Rahul',
            'K',
            'Sharma'
        );

        // 5. Enter Employee IDs
        await myInfoAction.enterIds(
            'EMP101',
            'OTH555'
        );

        // 6. Enter Driver's License Information
        await myInfoAction.enterDriversLicenseInfo(
            'DL-987654',
            '2030-12-31'
        );

        // 7. Select Nationality
        await myInfoAction.selectNationality('Indian');

        // 8. Select Marital Status
        await myInfoAction.selectMaritalStatus('Single');

        // 9. Enter Date of Birth
        await myInfoAction.enterDateOfBirth('1995-05-15');

        // 10. Select Gender
        await myInfoAction.selectGender('Male');

        // 11. Save Personal Details
        await myInfoAction.clickSaveButton();

        // 12. Verify save notification
        await expect(
            page.locator('.oxd-toast')
        ).toBeVisible();

    });

});
