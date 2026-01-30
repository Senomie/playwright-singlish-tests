import { test, expect } from '@playwright/test';

test.describe('Negative Functional Tests - Singlish to Sinhala Conversion Failures', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
  });

  test('Neg_Fun_0001', async ({ page }) => {
    const input = 'mamagedharainne';
    const correctExpected = 'මම ගෙදර ඉන්නේ';
    const incorrectActual = ' kerman ගෙදරෛන්නෙ';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).toBe(correctExpected);
  });

  test('Neg_Fun_0002', async ({ page }) => {
    const input = 'oyaaa enneee';
    const correctExpected = 'ඔයා එන්නෙ';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).toBe(correctExpected);
  });

  test('Neg_Fun_0003', async ({ page }) => {
    const input = 'mama @#$ gedhara yanavaa';
    const correctExpected = 'මම ගෙදර යනවා';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).toBe(correctExpected);
  });

  test('Neg_Fun_0004', async ({ page }) => {
    const input = '123456789';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    // Numeric input should remain as is or be minimal
    expect(actual.trim().length).not.toBeLessThan(30);
  });

  test('Neg_Fun_0005', async ({ page }) => {
    const input = 'MaMa GeDhArA YaNnEe';
    const correctExpected = 'මම ගෙදර යන්නෙ';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).toBe(correctExpected);
  });

  test('Neg_Fun_0006', async ({ page }) => {
    const input = 'mama office #1 yanna inne @ evening';
    const correctExpected = 'මම office යන්න ඉන්නේ evening';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).toBe(correctExpected);
  });

  test('Neg_Fun_0007', async ({ page }) => {
    const input = 'mama gedhara yanna inne mama gedhara yanna inne mama gedhara yanna inne mama gedhara yanna inne mama gedhara yanna inne mama gedhara yanna inne mama gedhara yanna inne mama gedhara yanna inne mama gedhara yanna inne mama gedhara yanna inne';
    const correctExpected = 'මම ගෙදර යන්න ඉන්නේ';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).toBe(correctExpected);
  });

  test('Neg_Fun_0008', async ({ page }) => {
    const input = 'mama gadhra ynna inne';
    const correctExpected = 'මම ගෙදර යන්න ඉන්නේ';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).toBe(correctExpected);
  });

  test('Neg_Fun_0009', async ({ page }) => {
    const input = 'mama adha office pogalaam kiyala plan karalaa inne';
    const correctExpected = 'මම අද office යන්න කියල plan කරලා ඉන්නේ';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).toBe(correctExpected);
  });

  test('Neg_Fun_0010', async ({ page }) => {
    const input = 'adha< api kaemata yanna in?ne';
    const correctExpected = 'අද අපි කැමට යන්න ඉන්නේ';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).toBe(correctExpected);
  });


});
