import { BaseClass} from "../BaseLibrary/BaseClass";
export class LoginPage extends BaseClass{
    constructor(page, expect){
        super(page,expect);
        
        this.usernameInput = this.page.locator("//input[@id='user-name']")
        this.passwordInput = this.page.locator("//input[@id='password']")
        this.loginButton = this.page.locator("//input[@data-test='login-button']")

        // Add to Cart Locators
        this.productsTitle = this.page.locator("//span[@class='title']")
        this.addToCartBackpackButton = this.page.locator("//button[@id='add-to-cart-sauce-labs-backpack']")
        this.addToCartBikeLightButton = this.page.locator("//button[@id='add-to-cart-sauce-labs-bike-light']")
        this.cartBadge = this.page.locator("//span[@class='shopping_cart_badge']")
        this.cartIcon = this.page.locator("//a[@class='shopping_cart_link']")
        this.cartItemNames = this.page.locator("//div[@class='inventory_item_name']")

        // Checkout Locators
        this.checkoutButton = this.page.locator("//button[@id='checkout']")
        this.firstNameInput = this.page.locator("//input[@id='first-name']")
        this.lastNameInput = this.page.locator("//input[@id='last-name']")
        this.postalCodeInput = this.page.locator("//input[@id='postal-code']")
        this.continueButton = this.page.locator("//input[@id='continue']")
        this.finishButton = this.page.locator("//button[@id='finish']")
        this.orderConfirmationHeader = this.page.locator("//h2[@class='complete-header']")
    }
}