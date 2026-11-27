
import { AdminPageObject } from '../PageObject/AdminPageObject.js';

export class AdminPageActions extends AdminPageObject {

    constructor(page, expect) {
        super(page, expect);
    }

    // 1. Click Admin menu
    async clickOnAdminMenu() {
        await this.adminMenu.click();
    }

    // 2. Enter Username
    async enterUsername(username) {
        await this.username.fill(username);
    }

    // 3. Select User Role
    async selectUserRole(roleName) {
        await this.userRoleDropdown.click();
        await this.selectRoleOption(roleName).click();
    }

    // 4. Enter Employee Name
    async enterEmployeeName(name) {
        await this.employeeNameInput.fill(name);

        await this.realEmployeeOption.waitFor({
            state: 'visible',
            timeout: 8000
        });

        await this.realEmployeeOption.click();
    }

    // 5. Select Status
    async selectStatus(status) {
        await this.statusDropdown.click();
        await this.selectStatusOption(status).click();
    }

    // 6. Click Search
    async clickSearchButton() {
        await this.searchButton.click();
    }

    // 7. Click Reset
    async clickResetButton() {
        await this.resetButton.click();
    }

    // 8. Click Add
    async clickAddButton() {
        await this.addButton.click();
    }

    // 9. Enter Password
    async enterPassword(password) {
        await this.passwordInput.fill(password);
    }

    // 10. Confirm Password
    async enterConfirmPassword(password) {
        await this.confirmPasswordInput.fill(password);
    }

    // 11. Click Save
    async clickSaveButton() {
        await this.saveButton.click();

        await this.page.waitForURL('**/admin/viewSystemUsers');
    }

    // 12. Delete using Trash icon
    
async clickDeleteButton() {

    await this.firstRowDeleteButton.waitFor({
        state: 'visible'
    });

    await this.firstRowDeleteButton.click();

    // Wait for confirmation popup
    await this.confirmDeleteButton.waitFor({
        state: 'visible'
    });

    // Keep popup visible for 3 seconds
    await this.page.waitForTimeout(3000);

    // Confirm deletion
    await this.confirmDeleteButton.click();
}


    // 13. Delete using Checkbox
    async deleteUsingCheckbox() {
        await this.firstRowCheckbox.click();
        await this.deleteSelectedButton.click();

        await this.confirmDeleteButton.waitFor({
            state: 'visible'
        });

        await this.confirmDeleteButton.click();
    }

    // 14. Verify successful deletion
    async verifyDeleteSuccessPopup() {
        await this.successToast.waitFor({
            state: 'visible',
            timeout: 8000
        });
    }
}
