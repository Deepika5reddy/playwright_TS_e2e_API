import { Page, Locator } from "@playwright/test";
import ENV from '../utils/env';
import { AbstractPage } from "./AbstractPage";
import { expect } from '@playwright/test';

export class LoginPage extends AbstractPage {
   // readonly page: Page; not required because of abstaction
    readonly emailId: Locator;
    readonly password: Locator;
    readonly signInButton: Locator;
    private readonly storageStatePath = "tests/e2e/storageState.json";

    constructor(page: Page) { 
        super(page);
        //this.page = page;
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

    async clickOnRegister() {
        await this.page.getByRole('button', { name: 'Talk to us arrow-right' }).first().click();
        await this.page.locator('#input-text-emailAddress').click();
        await this.page.locator('#input-text-emailAddress').fill('reddy5deeps@gmail.com');
        await this.page.locator('#input-text-firstName').click();
        await this.page.locator('#input-text-firstName').fill('Deepika');
        await this.page.locator('#input-text-lastName').click();
        await this.page.locator('#input-text-lastName').fill('Reddy');
        await this.page.getByRole('combobox', { name: 'caret-down' }).click();
        await this.page.getByRole('button', { name: 'caret-down', exact: true }).click();
        await this.page.getByRole('combobox', { name: 'caret-down' }).fill('uni');
        await this.page.getByText('United States').click();
        await this.page.getByLabel('Which category best describes your organization? *').getByRole('button', { name: '-- Please Select -- caret-down' }).click();
        await this.page.getByText('Academic').click();
        await this.page.getByRole('button', { name: '-- Please Select -- caret-down' }).click();
        await this.page.getByText('Advisor Team').click();
        await this.page.locator('#input-text-company').click();
        await this.page.locator('#input-text-company').fill('Morningstar');
        await this.page.getByRole('button', { name: 'Submit arrow-right' }).click();
    }
    async validateSuccessMessage() {
        await expect(this.page.getByRole('heading', { name: 'Thank You' })).toBeVisible();
    }
        
    

}

