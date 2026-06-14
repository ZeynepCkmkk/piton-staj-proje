const { test, expect } = require('@playwright/test');

test.describe('Text Box Testleri', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/text-box', { waitUntil: 'domcontentloaded' });
  });

  test('TC-001: Gecerli bilgilerle form gonderilmeli', async ({ page }) => {
    await page.fill('#userName', 'Zeynep Çakmak');
    await page.fill('#userEmail', 'zeynep@test.com');
    await page.fill('#currentAddress', 'Eskişehir');
    await page.fill('#permanentAddress', 'Ankara');
    await page.click('#submit');
    await expect(page.locator('#output')).toBeVisible();
  });

  test('TC-002: Bos form gonderilince cikti gorunmemeli', async ({ page }) => {
    await page.click('#submit');
    await expect(page.locator('#output')).not.toBeVisible();
  });

  test('TC-003: Gecersiz email girilince kutu kirmizi olmali', async ({ page }) => {
    await page.fill('#userName', 'Zeynep Çakmak');
    await page.fill('#userEmail', 'zeynep123');
    await page.click('#submit');
    await expect(page.locator('#userEmail')).toHaveClass(/field-error/);
  });

  test('TC-004: Email alanina bosluk girilince hata vermeli (BUG)', async ({ page }) => {
    await page.fill('#userName', 'Zeynep Çakmak');
    await page.fill('#userEmail', '   ');
    await page.click('#submit');
    await expect(page.locator('#output')).toBeVisible();
  });

});