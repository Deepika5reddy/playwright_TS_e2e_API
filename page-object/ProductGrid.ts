import { Page, Locator, expect } from '@playwright/test';

export class ProductGridPage {
    readonly page: Page;
    readonly productGrid: Locator;
    readonly productItems: Locator;

    constructor(page: Page) {
        this.page = page;
        this.productGrid = page.locator('div.row[data-grid*="product-layout product-grid"]'); 
        this.productItems = page.locator('div.product-layout.product-grid'); 
    }


    async validateProductGridCount(expectedCount: number) {
        const count = await this.productItems.count();
        expect(count).toBe(expectedCount);
    }

    async validateAllProductsAreVisible() {
        await expect(this.productItems).toHaveCount(4); 
        await expect(this.productItems.first()).toBeVisible(); 
    }
}
