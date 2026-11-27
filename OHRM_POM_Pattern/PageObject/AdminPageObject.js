
import { BaseClass } from '../BaseLibrary/BaseClass.js';

export class AdminPageObject extends BaseClass {

    constructor(page, expect) {
        super(page, expect);

        // 1. Admin menu
        this.adminMenu = this.page.locator("//span[text()='Admin']");

        // 2. Username input
        this.username = this.page.locator(
            "//label[text()='Username']//parent::div//following-sibling::div//input"
        );

        // 3. User Role dropdown
        this.userRoleDropdown = this.page.locator(
            "//label[text()='User Role']/parent::div/following-sibling::div//div[@class='oxd-select-text-input']"
        );

        this.selectRoleOption = (roleName) =>
            this.page.locator(`//div[@role='listbox']//span[text()='${roleName}']`);

        // 4. Employee Name input
        this.employeeNameInput = this.page.locator(
            "//label[text()='Employee Name']/parent::div/following-sibling::div//input"
        );

        this.realEmployeeOption = this.page
            .locator(".oxd-autocomplete-option")
            .filter({ hasNotText: 'Searching' })
            .first();

        // 5. Status dropdown
        this.statusDropdown = this.page.locator(
            "//label[text()='Status']/parent::div/following-sibling::div//div[@class='oxd-select-text-input']"
        );

        this.selectStatusOption = (status) =>
            this.page.locator(`//div[@role='listbox']//span[text()='${status}']`);

        // 6. Search and Reset buttons
        this.searchButton = this.page.locator("//button[@type='submit']");
        this.resetButton = this.page.locator("//button[normalize-space()='Reset']");

        // 7. Add User elements
        this.addButton = this.page.locator("//button[normalize-space()='Add']");

        this.passwordInput = this.page.locator(
            "//label[text()='Password']/parent::div/following-sibling::div//input"
        );

        this.confirmPasswordInput = this.page.locator(
            "//label[text()='Confirm Password']/parent::div/following-sibling::div//input"
        );

        this.saveButton = this.page.locator("//button[normalize-space()='Save']");

        // 8. Delete button
        this.firstRowDeleteButton = this.page.locator(
            "//div[@class='oxd-table-card']//button[.//i[contains(@class,'bi-trash')]]"
        ).first();

        // 9. Checkbox and Delete Selected button
        this.firstRowCheckbox = this.page.locator(
            "//div[@class='oxd-table-card']//span[contains(@class,'oxd-checkbox-input')]"
        ).first();

        this.deleteSelectedButton = this.page.locator(
            "//button[normalize-space()='Delete Selected']"
        );

        // 10. Delete confirmation button
        this.confirmDeleteButton = this.page.locator(
            "//button[normalize-space()='Yes, Delete']"
        );

        // 11. Success message
        this.successToast = this.page.locator(".oxd-toast");
    }
}
