import { test, expect } from "@playwright/test";
import { LoginPageAction } from "../PageAction/LoginPageAction";

test('SauceDemo Login Test', async ({page}) =>{
     const LoginActionRef = new LoginPageAction(page, expect);

     await LoginActionRef.launchBrowserandGotoUrl('https://www.saucedemo.com/');


     await LoginActionRef.enterUsername('standard_user')
     await LoginActionRef.WaitForSomeTime(2000);

     await LoginActionRef.enterPassword('secret_sauce')
     await LoginActionRef.WaitForSomeTime(2000);

     await LoginActionRef.clickLoginButton();
     await LoginActionRef.WaitForSomeTime(2000);

     // Add to Cart Flow
     await LoginActionRef.addBackpackToCart();
     await LoginActionRef.verifyCartBadgeCount(1);
     await LoginActionRef.WaitForSomeTime(1000);

     await LoginActionRef.clickCartIcon();
     await LoginActionRef.verifyItemInCart('Sauce Labs Backpack');
     await LoginActionRef.WaitForSomeTime(1000);

     // Checkout Flow
     await LoginActionRef.clickCheckoutButton();
     await LoginActionRef.enterFirstName('John');
     await LoginActionRef.enterLastName('Doe');
     await LoginActionRef.enterPostalCode('411001');
     await LoginActionRef.WaitForSomeTime(1000);

     await LoginActionRef.clickContinueButton();
     await LoginActionRef.WaitForSomeTime(1000);

     await LoginActionRef.clickFinishButton();
     await LoginActionRef.verifyOrderConfirmation();
     await LoginActionRef.WaitForSomeTime(1000);

     await LoginActionRef.CloseBrowser();


});