import { LoginPage } from "../PageObject/LoginPage";
export class LoginPageAction extends LoginPage{
    
    constructor(page,expect){
        super(page, expect)
    }

    async enterUsername(Username){
        await this.usernameInput.fill(Username);

    }

    async enterPassword(Password){
        await this.passwordInput.fill(Password);
    }

    async clickLoginButton(){
        await this.loginButton.click();

    }

    // Add to Cart Actions
    async addBackpackToCart(){
        await this.addToCartBackpackButton.click();
    }

    async addBikeLightToCart(){
        await this.addToCartBikeLightButton.click();
    }

    async verifyCartBadgeCount(count){
        await this.expect(this.cartBadge).toHaveText(String(count));
    }

    async clickCartIcon(){
        await this.cartIcon.click();
    }

    async verifyItemInCart(productName){
        await this.expect(this.cartItemNames.filter({ hasText: productName })).toBeVisible();
    }

    // Checkout Actions
    async clickCheckoutButton(){
        await this.checkoutButton.click();
    }

    async enterFirstName(firstName){
        await this.firstNameInput.fill(firstName);
    }

    async enterLastName(lastName){
        await this.lastNameInput.fill(lastName);
    }

    async enterPostalCode(postalCode){
        await this.postalCodeInput.fill(postalCode);
    }

    async clickContinueButton(){
        await this.continueButton.click();
    }

    async clickFinishButton(){
        await this.finishButton.click();
    }

    async verifyOrderConfirmation(){
        await this.expect(this.orderConfirmationHeader).toHaveText('Thank you for your order!');
    }
}