const { test, expect } = require('@playwright/test');

test.describe('Radio Button Testleri', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/radio-button', { waitUntil: 'domcontentloaded' });
  });

  test('TC-006: Yes secilince dogru mesaj gorunmeli', async ({ page }) => {
    await page.locator('label[for="yesRadio"]').click();
    await expect(page.locator('.text-success')).toContainText('Yes');
  });

  
});