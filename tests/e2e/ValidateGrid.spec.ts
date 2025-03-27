import { test, expect } from "@playwright/test";
import { LoginPage } from '../../page-object/loginPage';
import { ProductGridPage } from '../../page-object/ProductGrid';
import ENV from '../../utils/env';

test.use({ storageState: "tests/e2e/storageState.json" });

test("Validate the contents of page ", async ({ page }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
    await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'My Orders' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'My Affiliate Account' })).toBeVisible();
});



test("Search for iphone in  textbox and validate the count", async ({ page }) => {
    const productGridPage = new ProductGridPage(page); 
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
    await expect(page.getByRole('textbox', { name: 'Search For Products' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Search For Products' }).fill('iphone');
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.getByRole('heading', { name: 'Search - iphone' })).toBeVisible();
    await productGridPage.validateProductGridCount(4);
    await productGridPage.validateAllProductsAreVisible();
    //await new Promise(() => {});
});

test("display all the prices of iphone", async ({ page }) => {
    const productGridPage = new ProductGridPage(page); 
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
    await expect(page.getByRole('textbox', { name: 'Search For Products' })).toBeVisible();
    await page.getByRole('textbox', { name: 'Search For Products' }).fill('iphone');
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.getByRole('heading', { name: 'Search - iphone' })).toBeVisible();
    const price = await page.locator('.price-new');
    const priceNames = await price.evaluateAll((elements) => elements.map((el)=> el.textContent?.trim()));
    console.log('No of prices: ', await price.count());
    console.log('Price of iphone: ', priceNames);
    console.log('First array in pricesName: ', priceNames[0]);
});

   
