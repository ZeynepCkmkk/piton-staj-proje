const { test, expect } = require('@playwright/test');

test.describe('Select Menu Testleri', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/auto-complete', { waitUntil: 'domcontentloaded' });
  });

  test('TC-019: Single color alana harf yazinca oneri cikmali', async ({ page }) => {
    await page.locator('#autoCompleteSingle input').type('re');
    await expect(page.locator('.auto-complete__menu')).toBeVisible();
  });

  test('TC-020: Multiple color alana birden fazla renk secilebilmeli', async ({ page }) => {
    await page.locator('#autoCompleteMultiple input').type('re');
    await page.locator('.auto-complete__option').first().click();
    await page.locator('#autoCompleteMultiple input').type('bl');
    await page.locator('.auto-complete__option').first().click();
    const selected = page.locator('.auto-complete__multi-value');
    await expect(selected).toHaveCount(2);
  });

  test('TC-021: Single color alana birden fazla renk secilemez', async ({ page }) => {
    await page.locator('#autoCompleteSingle input').type('re');
    await page.locator('.auto-complete__option').first().click();
    const values = page.locator('#autoCompleteSingle .auto-complete__single-value');
    await expect(values).toHaveCount(1);
  });

});