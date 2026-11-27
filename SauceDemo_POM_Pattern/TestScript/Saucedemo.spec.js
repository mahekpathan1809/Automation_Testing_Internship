import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.waitForTimeout(1000)
  await page.goto('https://www.saucedemo.com/');
  await page.waitForTimeout(1000)
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.waitForTimeout(1000)
  await page.locator('[data-test="password"]').click();
  await page.waitForTimeout(1000)
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.waitForTimeout(1000)
  await page.locator('[data-test="login-button"]').click();
  await page.waitForTimeout(1000)
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.waitForTimeout(1000)
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.waitForTimeout(1000)
  await page.locator('[data-test="checkout"]').click();
  await page.waitForTimeout(1000)
  await page.locator('[data-test="firstName"]').click();
  await page.waitForTimeout(1000)
  await page.locator('[data-test="firstName"]').fill('Mahek');
  await page.waitForTimeout(1000)
  await page.locator('[data-test="lastName"]').fill('Pathan');
  await page.waitForTimeout(1000)
  await page.locator('[data-test="postalCode"]').fill('590010');
  await page.waitForTimeout(1000)
  await page.locator('.error-message-container').click();
  await page.waitForTimeout(1000)
  await page.locator('[data-test="continue"]').click();
  await page.waitForTimeout(1000)
  await page.locator('[data-test="finish"]').click();
  await page.waitForTimeout(1000)
  await page.locator('[data-test="back-to-products"]').click();
  await page.waitForTimeout(1000)
});