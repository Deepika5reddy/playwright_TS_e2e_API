import {test, expect} from '@playwright/test';
import { LoginPage } from '../../page-object/loginPage';

test('Display all the title of the book', async ({page}) => {

    await page.goto('https://books.toscrape.com/');
    const productPod = page.locator('.product_pod');
    const titleGrid = await productPod.locator('h3 a');
    console.log('Total books: ', await titleGrid.count());
    //title name is a array of title, evaluate all method is used to read the text conatinsof all the matching titlegrid, We use map to get the text contents
const titleNames = await titleGrid.evaluateAll((elements) => elements.map((el)=> el.textContent?.trim()));
console.log('Book titles: ', titleNames);


   
});

test('Display Name, rating, price', async ({page}) => {

    await page.goto('https://books.toscrape.com/');
    const bookItems = page.locator('li.col-xs-6.col-sm-4.col-md-3.col-lg-3');

    const products = await bookItems.evaluateAll((books) =>
        books.map(book => ({
          Name:  book.querySelector("h3 a")?.textContent?.trim() || "N/A",
          Rating: book.querySelector("p.star-rating")?.className.split(" ")[1] || "N/A",
          Price: book.querySelector("p.price_color")?.textContent?.trim() || "N/A"
        }))
        );
        console.log(products);   
});


test('Convert page to pdf', async ({page}) => {

    await page.goto('https://web-scraping.dev');
    await page.pdf({path: 'tests/e2e/screenshots/web-scraping.pdf', format: 'A4'});
});


test('validate all the variants', async ({page}) => {

    await page.goto('https://web-scraping.dev/product/1');
    
    const colorName = page.locator("a.variant.list-group-item");
    console.log('Total variants: ', await colorName.count());
    const colorNames = await colorName.evaluateAll((elements) => elements.map((el)=> el.textContent?.trim()));
console.log('Color names : ', colorNames);
   
const eleText = await page.locator('.text-class').textContent();
 expect(eleText).toBe('Test');

await expect(page.locator('.text-class')).toHaveText('Test');    

});


test.skip('Validate the registration of new user on Analytic page', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigateUrl();
    await loginPage.clickOnRegister();
    await loginPage.validateSuccessMessage();
    
});