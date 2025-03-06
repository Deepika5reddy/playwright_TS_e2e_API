import { Page, Locator } from "@playwright/test";
import ENV from '../utils/env';

export class LoginPage {
    readonly page: Page;
    readonly emailId: Locator;
    readonly password: Locator;
    readonly signInButton: Locator;
    private readonly storageStatePath = "tests/e2e/storageState.json";

    constructor(page: Page) { 
        this.page = page;
        this.emailId = this.page.getByLabel('E-Mail Address');
        this.password = this.page.getByLabel('Password'),
        this.signInButton = this.page.getByRole('button', { name: 'Login' });
    }

    async navigateUrl() { 
        await this.page.goto(ENV.URL);
    }

    async performLogin(email: string, password: string) {
        await this.emailId.fill(email);
        await this.password.fill(password);
        await this.signInButton.click();
        
    }
 

    async getErrorMessage() {
        return await this.page.textContent('.alert-danger');
    }

    

}

