const { test, expect } = require('@playwright/test');

test.describe('Practice Form Testleri', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form', { waitUntil: 'domcontentloaded' });
  });

  test('TC-010: Zorunlu alanlar doldurulunca form basariyla gonderilmeli', async ({ page }) => {
    await page.fill('#firstName', 'Zeynep');
    await page.fill('#lastName', 'Cakmak');
    await page.locator('label[for="gender-radio-1"]').click();
    await page.fill('#userNumber', '0543211223');
    await page.click('#submit');
    await expect(page.locator('#example-modal-sizes-title-lg')).toContainText('Thanks for submitting the form');
  });

  test('TC-011: Zorunlu alanlar bos birakilinca hata gosterilmeli', async ({ page }) => {
    await page.click('#submit');
    await expect(page.locator('#firstName')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });

  test('TC-012: Gecersiz email girilince hata vermeli', async ({ page }) => {
    await page.fill('#firstName', 'Zeynep');
    await page.fill('#lastName', 'Cakmak');
    await page.locator('label[for="gender-radio-1"]').click();
    await page.fill('#userNumber', '0543211223');
    await page.fill('#userEmail', 'zeynep123');
    await page.click('#submit');
    await expect(page.locator('#userEmail')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });

  test('TC-013: Telefona 10 haneden az girilince hata vermeli', async ({ page }) => {
    await page.fill('#firstName', 'Zeynep');
    await page.fill('#lastName', 'Cakmak');
    await page.locator('label[for="gender-radio-1"]').click();
    await page.fill('#userNumber', '0543');
    await page.click('#submit');
    await expect(page.locator('#userNumber')).toHaveCSS('border-color', 'rgb(220, 53, 69)');
  });

  test('TC-014: Hobbies alaninda birden fazla secim yapilabilmeli', async ({ page }) => {
    await page.locator('label[for="hobbies-checkbox-1"]').click();
    await page.locator('label[for="hobbies-checkbox-2"]').click();
    await page.locator('label[for="hobbies-checkbox-3"]').click();
    await expect(page.locator('#hobbies-checkbox-1')).toBeChecked();
    await expect(page.locator('#hobbies-checkbox-2')).toBeChecked();
    await expect(page.locator('#hobbies-checkbox-3')).toBeChecked();
  });

});
