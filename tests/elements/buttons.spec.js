const { test, expect } = require('@playwright/test');

test.describe('Buttons Testleri', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/buttons', { waitUntil: 'domcontentloaded' });
  });

  test('TC-009: Butonlarin farkli tiklama turlerine dogru tepki vermesi', async ({ page }) => {
    await page.dblclick('#doubleClickBtn');
    await expect(page.locator('#doubleClickMessage')).toContainText('You have done a double click');
    await page.click('#rightClickBtn', { button: 'right' });
    await expect(page.locator('#rightClickMessage')).toContainText('You have done a right click');
    await page.locator('button', { hasText: 'Click Me' }).last().click();
    await expect(page.locator('#dynamicClickMessage')).toContainText('You have done a dynamic click');
  });

});