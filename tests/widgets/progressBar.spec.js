const { test, expect } = require('@playwright/test');

test.describe('Progress Bar Testleri', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/progress-bar', { waitUntil: 'domcontentloaded' });
  });

  test('TC-015: Start a basinca cubuk ilerlemeye baslamali', async ({ page }) => {
    await page.click('#startStopButton');
    await page.waitForTimeout(1000);
    const value = await page.locator('.progress-bar').getAttribute('aria-valuenow');
    expect(parseInt(value)).toBeGreaterThan(0);
  });

  test('TC-016: Stop a basinca cubuk durmal', async ({ page }) => {
    await page.click('#startStopButton');
    await page.waitForTimeout(2000);
    await page.click('#startStopButton');
    const value1 = await page.locator('.progress-bar').getAttribute('aria-valuenow');
    await page.waitForTimeout(1000);
    const value2 = await page.locator('.progress-bar').getAttribute('aria-valuenow');
    expect(value1).toBe(value2);
  });

 test('TC-017: 100e ulasinca buton Reset olmali', async ({ page }) => {
    await page.click('#startStopButton');
    await page.waitForSelector('#resetButton', { timeout: 55000 });
    await expect(page.locator('#resetButton')).toBeVisible();
  });

  test('TC-018: Reset e basinca cubuk sifirlanmali', async ({ page }) => {
    await page.click('#startStopButton');
    await page.waitForSelector('#resetButton', { timeout: 30000 });
    await page.click('#resetButton');
    const value = await page.locator('.progress-bar').getAttribute('aria-valuenow');
    expect(value).toBe('0');
  });

});