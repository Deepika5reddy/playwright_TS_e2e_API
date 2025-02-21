import { test, expect } from "@playwright/test";
import { LoginPage } from '../../page-object/loginPage';



test("Login Test", async ({ page }) => {
    const loginPage = new LoginPage(page); // Constructor is called
    await loginPage.navigateUrl();
    await loginPage.performLogin("user@example.com", "SecurePass123");

   

});