/**
 * Helper utilities for Singlish translator tests
 */

/**
 * Locates the Singlish input field on the page
 * @param {Page} page - Playwright page object
 * @returns {Locator} Input field locator
 */
export async function getInputField(page) {
  const inputField = page.locator('textarea').first();
  await inputField.waitFor({ state: 'attached', timeout: 10000 });
  return inputField;
}

/**
 * Locates the Sinhala output field on the page
 * @param {Page} page - Playwright page object
 * @returns {Locator} Output field locator
 */
export async function getOutputField(page) {
  // Use simple nth() selector - last textarea is always output
  const outputField = page.locator('textarea').last();
  await outputField.waitFor({ state: 'attached', timeout: 10000 });
  return outputField;
}

/**
 * Performs a complete translation test
 * @param {Page} page - Playwright page object
 * @param {string} input - Singlish input text
 * @param {number} waitTime - Time to wait for conversion in milliseconds
 * @returns {string} Actual Sinhala output
 */
export async function performTranslation(page, input, waitTime = 3000) {
  try {
    const inputField = await getInputField(page);
    const outputField = await getOutputField(page);
    
    await inputField.clear();
    await page.waitForTimeout(300);
    
    await inputField.fill(input);
    await page.waitForTimeout(500);
    
    await page.waitForTimeout(waitTime);
    
    await page.waitForFunction(
      () => {
        const textareas = document.querySelectorAll('textarea');
        return textareas.length >= 2 && textareas[1]?.value?.trim().length > 0;
      },
      { timeout: 5000 }
    ).catch(() => {
    });
    
    // Get the output value
    const actualOutput = await outputField.inputValue();
    return actualOutput.trim();
  } catch (error) {
    console.error('Translation failed:', error.message);
    throw error;
  }
}

/**
 * Clears both input and output fields
 * @param {Page} page - Playwright page object
 */
export async function clearFields(page) {
  const inputField = await getInputField(page);
  await inputField.clear();
  await page.waitForTimeout(500);
}

/**
 * Types text character by character to simulate real user typing
 * @param {Page} page - Playwright page object
 * @param {string} text - Text to type
 * @param {number} delay - Delay between characters in milliseconds
 */
export async function typeSlowly(page, text, delay = 100) {
  const inputField = await getInputField(page);
  await inputField.type(text, { delay });
}

/**
 * Validates that output matches expected value
 * @param {string} actual - Actual output
 * @param {string} expected - Expected output
 * @returns {boolean} Whether outputs match
 */
export function validateOutput(actual, expected) {
  return actual === expected;
}

/**
 * Takes a screenshot with a custom name
 * @param {Page} page - Playwright page object
 * @param {string} name - Screenshot name
 */
export async function takeScreenshot(page, name) {
  await page.screenshot({ 
    path: `screenshots/${name}.png`,
    fullPage: true 
  });
}
