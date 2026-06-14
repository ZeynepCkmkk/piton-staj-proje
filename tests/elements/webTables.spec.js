const { test, expect } = require('@playwright/test');

test.describe('Web Tables Testleri', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://demoqa.com/webtables', { waitUntil: 'networkidle' });
  });

  test.skip('TC-007: Gecerli bilgilerle yeni kayit eklenince tabloda gorunmeli', async ({ page }) => {
    await page.click('#addNewRecordButton');
    await page.fill('#firstName', 'Zeynep');
    await page.fill('#lastName', 'Cakmak');
    await page.fill('#userEmail', 'zeynep@test.com');
    await page.fill('#age', '25');
    await page.fill('#salary', '5000');
    await page.fill('#department', 'QA');
    await page.click('#submit');
    await page.waitForTimeout(1000);
    const content = await page.locator('.rt-tbody').innerText();
    expect(content).toContain('Zeynep');
  });

  test.skip('TC-008: Bos formla Submit a basinca hata vermeli', async ({ page }) => {
    await page.click('#addNewRecordButton');
    await page.click('#submit');
    await page.waitForTimeout(500);
    const firstNameBorder = await page.locator('#firstName').evaluate(el => 
      window.getComputedStyle(el).borderColor
    );
    expect(firstNameBorder).toContain('rgb(220');
  });

});