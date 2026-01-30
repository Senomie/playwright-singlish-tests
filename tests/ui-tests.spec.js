import { test, expect } from '@playwright/test';

test.describe('UI Functional Tests - User Interface Behavior', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
  });

 

  test('Pos_UI_0001: Progressive output update', async ({ page }) => {
    const words = ['mama', 'gedhara', 'yanna', 'inne'];
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.clear();
    await page.waitForTimeout(500);
    
    for (const word of words) {
      await inputField.type(word + ' ', { delay: 50 });
      await page.waitForTimeout(800);
    }
    
    const actual = await outputField.inputValue();
    expect(actual.trim().length).toBeGreaterThan(0);
  });

});
