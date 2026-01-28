# Playwright Singlish to Sinhala Translation Tests

A comprehensive Playwright test suite for validating the Singlish to Sinhala translation functionality of the Swift Translator application.

## 📋 Project Overview

This project contains automated tests for the **Singlish to Sinhala Translator** (https://www.swifttranslator.com/). The test suite includes:

- **24 Positive Functional Tests** - Verify correct translations
- **10 Negative Functional Tests** - Verify rejection of invalid/malformed inputs
- **UI Functional Tests** - Validate user interface behavior

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (comes with Node.js)
- **Windows/Mac/Linux** OS

### Installation

1. **Clone or navigate to the project directory:**
```bash
cd c:\Users\USER\Desktop\playwright-singlish-tests
```

2. **Install project dependencies:**
```bash
npm install
```

This will install:
- `@playwright/test` - Testing framework
- `@types/node` - TypeScript types for Node.js

## 📁 Project Structure

```
playwright-singlish-tests/
├── tests/
│   ├── positive-tests.spec.js      # 24 positive test cases
│   ├── negative-tests.spec.js      # 10 negative test cases
│   ├── ui-tests.spec.js            # UI behavior tests
│   └── helpers.js                  # Utility functions
├── playwright.config.js             # Playwright configuration
├── package.json                     # Project dependencies
├── README.md                        # This file
└── test-results/                   # Test results (generated)
```

## ▶️ Running Tests

### Run All Tests
```bash
npm test
```

### Run Positive Tests Only
```bash
npm run test:positive
```

**Expected Result:** All 24 tests should **PASS** ✅
- Input text is correctly converted to Sinhala
- Actual output matches expected output

### Run Negative Tests Only
```bash
npm run test:negative
```

**Expected Result:** All 10 tests should **Fail** ❌
- Invalid/malformed inputs are handled correctly
- Translator rejects or doesn't match expected output

### Run UI Tests Only
```bash
npm run test:ui
```

**Expected Result:** UI tests validate interface behavior

### View Test Report
```bash
npm run test:report
```

This opens an HTML report with detailed test results, screenshots, and failure information.

## 📊 Test Cases Breakdown

### Positive Tests (24 cases)
Tests that verify **correct Singlish to Sinhala translation:**

| Test ID | Input | Expected Output |
|---------|-------|-----------------|
| Pos_Fun_0001 | mata parakku velaa thiyenne, mama office yanna hadhannee | මට පරක්කු වෙලා තියෙන්නෙ, මම office යන්න හදන්නේ |
| Pos_Fun_0002 | oyaa adha gedharadha inne? | ඔයා අද ගෙදරද ඉන්නේ? |
| ... | ... | ... |
| Pos_Fun_0024 | api heta market yamu | අපි හෙට market යමු |

### Negative Tests (10 cases)
Tests that verify **rejection of invalid inputs:**

| Test ID | Input | Reason for Failure |
|---------|-------|-------------------|
| Neg_Fun_0001 | mamagedharainne | No spaces - malformed input |
| Neg_Fun_0002 | oyaaa enneee | Spelling errors - extra letters |
| Neg_Fun_0003 | mama @#$ gedhara yanavaa | Special characters |
| Neg_Fun_0004 | 123456789 | Numeric input only |
| Neg_Fun_0005 | MaMa GeDhArA YaNnEe | Mixed case - not recognized |
| ... | ... | ... |

## 🔧 Configuration

### playwright.config.js
Key settings:

```javascript
{
  testDir: './tests',           // Test files location
  fullyParallel: false,         // Run tests sequentially
  workers: 1,                   // Single worker
  timeout: 60000,               // 60-second timeout per test
  baseURL: 'https://www.swifttranslator.com/',
  screenshot: 'only-on-failure', // Capture on failures
  reporter: 'html'              // HTML report output
}
```

## 📝 Test Structure

### Positive Test Format
```javascript
test('Pos_Fun_0001', async ({ page }) => {
  const input = 'singlish text';
  const expected = 'සිංහල යෙදුම';
  
  const inputField = page.locator('textarea').first();
  const outputField = page.locator('textarea').last();
  
  await inputField.fill(input);
  await page.waitForTimeout(2000);
  
  const actual = await outputField.inputValue();
  expect(actual.trim()).toBe(expected);  // ✅ MUST MATCH
});
```

### Negative Test Format
```javascript
test('Neg_Fun_0001', async ({ page }) => {
  const input = 'invalid_input';
  const correctExpected = 'correct translation';
  
  const inputField = page.locator('textarea').first();
  const outputField = page.locator('textarea').last();
  
  await inputField.fill(input);
  await page.waitForTimeout(2000);
  
  const actual = await outputField.inputValue();
  expect(actual.trim()).not.toBe(correctExpected);  // ❌ MUST NOT MATCH
});
```


## 📂 Test Results

After running tests, results are saved in:

```
test-results/
├── positive-tests-*.md
├── negative-tests-*.md
└── [screenshots on failure]/
```

HTML Report:
```
playwright-report/
└── index.html
```

## ✅ Expected Test Results

### Positive Tests
```
Running 24 tests using 1 worker

 ✓ 24 passed (45.2s)
```

**All PASS** = All 24 correct translations work properly

### Negative Tests
```
Running 10 tests using 1 worker

 ✓ 10 failed (22.1s)
```

**All FAIL** = All invalid inputs are correctly rejected
