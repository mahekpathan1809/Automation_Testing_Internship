
import { BaseClass } from '../BaseLibrary/BaseClass.js';

export class MyInfoPageObject extends BaseClass {

    constructor(page, expect) {
        super(page, expect);

        // 1. My Info menu
        this.myInfoMenu = this.page.locator("//span[text()='My Info']");

        // 2. Name fields
        this.firstName = this.page.locator("//input[@name='firstName']");
        this.middleName = this.page.locator("//input[@name='middleName']");
        this.lastName = this.page.locator("//input[@name='lastName']");

        // 3. Employee ID and Other ID
        this.employeeId = this.page.locator(
            "//label[text()='Employee Id']/parent::div/following-sibling::div//input"
        );

        this.otherId = this.page.locator(
            "//label[text()='Other Id']/parent::div/following-sibling::div//input"
        );

        // 4. Driver's License Number and Expiry Date
        this.driversLicense = this.page.locator(
            "//label[text()=\"Driver's License Number\"]/parent::div/following-sibling::div//input"
        );

        this.licenseExpiryDate = this.page.locator(
            "//label[text()='License Expiry Date']/parent::div/following-sibling::div//input"
        );

        // 5. Nationality dropdown
        this.nationalityDropdown = this.page.locator(
            "//label[text()='Nationality']/parent::div/following-sibling::div//div[@class='oxd-select-text-input']"
        );

        this.selectNationalityOption = (nationality) =>
            this.page.locator(`//div[@role='listbox']//span[text()='${nationality}']`);

        // 6. Marital Status dropdown
        this.maritalStatusDropdown = this.page.locator(
            "//label[text()='Marital Status']/parent::div/following-sibling::div//div[@class='oxd-select-text-input']"
        );

        this.selectMaritalStatusOption = (status) =>
            this.page.locator(`//div[@role='listbox']//span[text()='${status}']`);

        // 7. Date of Birth
        this.dateOfBirth = this.page.locator(
            "//label[text()='Date of Birth']/parent::div/following-sibling::div//input"
        );

        // 8. Gender
        this.genderMale = this.page.locator(
            "//label[text()='Male']//span[contains(@class,'oxd-radio-input')]"
        );

        this.genderFemale = this.page.locator(
            "//label[text()='Female']//span[contains(@class,'oxd-radio-input')]"
        );

        // 9. Save button
        this.savePersonalDetailsButton = this.page.locator(
            "(//button[@type='submit'][normalize-space()='Save'])[1]"
        );
    }
}
