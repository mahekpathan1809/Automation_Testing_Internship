
import { MyInfoPageObject } from '../PageObject/MyInfoPageObject.js';

export class MyInfoPageActions extends MyInfoPageObject {

    constructor(page, expect) {
        super(page, expect);
    }

    // 1. Click My Info menu
    async clickOnMyInfoMenu() {
        await this.myInfoMenu.click();
    }

    // 2. Enter Full Name
    async enterFullName(first, middle, last) {
        await this.firstName.fill(first);
        await this.middleName.fill(middle);
        await this.lastName.fill(last);
    }

    // 3. Enter Employee IDs
    async enterIds(empId, otherIdVal) {
        await this.employeeId.fill(empId);
        await this.otherId.fill(otherIdVal);
    }

    // 4. Enter Driver's License Information
    async enterDriversLicenseInfo(licenseNo, expiryDate) {
        await this.driversLicense.fill(licenseNo);
        await this.licenseExpiryDate.fill(expiryDate);
    }

    // 5. Select Nationality
    async selectNationality(nationality) {
        await this.nationalityDropdown.click();
        await this.selectNationalityOption(nationality).click();
    }

    // 6. Select Marital Status
    async selectMaritalStatus(status) {
        await this.maritalStatusDropdown.click();
        await this.selectMaritalStatusOption(status).click();
    }

    // 7. Enter Date of Birth
    async enterDateOfBirth(dob) {
        await this.dateOfBirth.fill(dob);
    }

    // 8. Select Gender
    async selectGender(gender) {

        if (gender.toLowerCase() === 'male') {
            await this.genderMale.click();

        } else if (gender.toLowerCase() === 'female') {
            await this.genderFemale.click();

        } else {
            throw new Error('Invalid gender: ' + gender);
        }
    }

    // 9. Click Save button
    async clickSaveButton() {
        await this.savePersonalDetailsButton.click();
    }
}
