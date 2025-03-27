import { test, expect } from "@playwright/test";
import { LoginPage } from '../../page-object/loginPage';
import ENV from '../../utils/env';
import {getRandomName} from '../../utils/helper';


test("Invalid user Test", async ({ page }) => {
    const loginPage = new LoginPage(page);
    console.log("Navigated to URL: ", ENV.URL);
    console.log("Username: ", ENV.invalidUsername);
    await loginPage.navigateUrl();
    await loginPage.performLogin(ENV.invalidUsername,ENV.invalidPassword);
    await loginPage.getErrorMessage();
    console.log("Error Message: ", await loginPage.getErrorMessage());
  
});

test("Valid  user Test", async ({ page }) => {
    const loginPage = new LoginPage(page);
    console.log("Navigated to URL: ", ENV.URL);
    console.log("Username: ", ENV.validUsername);
    await loginPage.navigateUrl();
    await loginPage.performLogin(ENV.validUsername,ENV.validPassword);
    await loginPage.wait(3000); // function of abstract class

    await expect(page.locator('p.m-0.font-size-sm')).toHaveText(
        "This is a dummy website for Web Automation Testing"
    );
    
});

test.skip("Generate Random number", async ({ page }) => {
    // Calling and using this function from helper.ts
    const randomName = await getRandomName();
    console.log("Random Name: ", randomName);

});




   
