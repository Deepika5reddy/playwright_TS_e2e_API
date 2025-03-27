import { test, expect } from "@playwright/test";
import { LoginPage } from '../../page-object/loginPage';
import ENV from '../../utils/env';


test("Validate screenshoot", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateUrl();
    await page.screenshot({path: 'tests/e2e/screenshots/loginPage.png',  fullPage: true });
    const logo = await page.locator('.figure [title = "Poco Electro"]');
    await logo.screenshot({ path: 'tests/e2e/screenshots/logo.png' });
    const wishListicon = await page.locator('[aria-label = "Wishlist"]');
    await wishListicon.screenshot({ path: 'tests/e2e/screenshots/wishListicon.png' });
    const rightColumn = await page.locator('.col-md-3');
    await rightColumn.screenshot({ path: 'tests/e2e/screenshots/rightColumn.png' });
});