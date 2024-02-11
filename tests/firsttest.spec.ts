/*//include playwright module
import { test, expect } from '@playwright/test';

//write test
test('Validate Youtube', async ({ page }) => {

  //Goto URL
  await page.goto('https://youtube.com/')
  //Search with keywords
  await page.getByPlaceholder('Search').click();
  await page.getByPlaceholder('Search').fill('miss rachel');

  await expect(page.getByRole('button', { name: 'Search' })).toBeEnabled();
  await page.getByRole('button', { name: 'Search' }).click();

});
*/