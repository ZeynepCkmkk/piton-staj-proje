const { test, expect } = require('@playwright/test');

test.describe('Check Box Testleri', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/checkbox', { waitUntil: 'domcontentloaded' });
  });

  test.skip('TC-005: Home secilince tum alt ogeler secilmeli', async ({ page }) => {
    await page.evaluate(() => {
      const ads = document.querySelectorAll('iframe');
      ads.forEach(ad => ad.remove());
    });
    await page.locator('label[for="tree-node-home"]').click({ force: true, timeout: 30000 });
    const result = await page.locator('#result').textContent();
    expect(result).toContain('home');
  });

});