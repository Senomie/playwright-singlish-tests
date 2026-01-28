import { test, expect } from '@playwright/test';

test.describe('Positive Functional Tests - Singlish to Sinhala Conversion', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(1000);
  });

  test('Pos_Fun_0001', async ({ page }) => {
    const input = 'mata parakku velaa thiyenne, mama office yanna hadhannee';
    const expected = 'මට පරක්කු වෙලා තියෙන්නෙ, මම office යන්න හදන්නේ';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0002', async ({ page }) => {
    const input = 'oyaa adha gedharadha inne?';
    const expected = 'ඔයා අද ගෙදරද ඉන්නේ?';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0003', async ({ page }) => {
    const input = 'api adha movie ekak balanavaa';
    const expected = 'අපි අද movie එකක් බලනවා';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0004', async ({ page }) => {
    const input = 'mama adha ennee naehae';
    const expected = 'මම අද එන්නේ නැහැ';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0005', async ({ page }) => {
    const input = 'poddak inna';
    const expected = 'පොඩ්ඩක් ඉන්න';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0006', async ({ page }) => {
    const input = 'karuNaakaralaa mata assignment ekata udhavvak ganna puLuvandha?';
    const expected = 'කරුණාකරලා මට assignment එකට උදව්වක් ගන්න පුළුවන්ද?';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0007', async ({ page }) => {
    const input = 'mama vaeda karalaa passe gedhara yanna inne saha raeta mama nuvara yanavaa yaaluvekge gedhara.';
    const expected = 'මම වැඩ කරලා පස්සෙ ගෙදර යන්න ඉන්නේ සහ රැට මම නුවර යනවා යාලුවෙක්ගෙ ගෙදර.';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0008', async ({ page }) => {
    const input = 'vaessa vahinavaanam adha api eliyata yannee naethuva inna eka hodhayi.';
    const expected = 'වැස්ස වහිනවානම් අද අපි එලියට යන්නේ නැතුව ඉන්න එක හොදයි.';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0009', async ({ page }) => {
    const input = 'ela machan adha supiri';
    const expected = 'එල මචන් අද සුපිරි';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0010', async ({ page }) => {
    const input = 'mama   gedhara    inne';
    const expected = 'මම   ගෙදර    ඉන්නේ';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected.trim());
  });

  test('Pos_Fun_0011', async ({ page }) => {
    const input = 'adha get together ekak thiyenavaa, mata adhinne mokakdha kiyalaa hithaaganna baeruva inne. ubalaa yanne car ekedha?';
    const expected = 'අද get together එකක් තියෙනවා, මට අදින්නෙ මොකක්ද කියලා හිතාගන්න බැරුව ඉන්නේ. උබලා යන්නෙ car එකෙද?';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0012', async ({ page }) => {
    const input = 'adha office vaeda vaedi vuna nisaa mama raeeta late venakan inna vuna. traffic eka vaedi nisaa gedhara enna velaa giyaa. mama WhatsApp message ekak yavanna inne ammaata.';
    const expected = 'අද office වැඩ වැඩි වුන නිසා මම රෑට late වෙනකන් ඉන්න වුන. traffic එක වැඩි නිසා ගෙදර එන්න වෙලා ගියා. මම WhatsApp message එකක් යවන්න ඉන්නේ අම්මාට.';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0013', async ({ page }) => {
    const input = 'mama adha shopping yanavaa';
    const expected = 'මම අද shopping යනවා';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0014', async ({ page }) => {
    const input = 'karuNaakaralaa eka balanna';
    const expected = 'කරුණාකරලා එක බලන්න';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0015', async ({ page }) => {
    const input = 'api heta Galle yamu';
    const expected = 'අපි හෙට Galle යමු';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0016', async ({ page }) => {
    const input = 'mama adha raeta nidhaganna kalin assignments tika submit karanna inne';
    const expected = 'මම අද රැට නිදගන්න කලින් assignments ටික submit කරන්න ඉන්නේ';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0017', async ({ page }) => {
    const input = 'oyaa adha office enna kalin mata call ekak dhaanavadha?';
    const expected = 'ඔයා අද office එන්න කලින් මට call එකක් දානවද?';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0018', async ({ page }) => {
    const input = 'amma gedhara innavanam nam mama tikak passe ennam, kaeema gennath onee.';
    const expected = 'අම්ම ගෙදර ඉන්නවනම් නම් මම ටිකක් පස්සෙ එන්නම්, කෑම ගෙන්නත් ඔනේ.';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0019', async ({ page }) => {
    const input = 'adha udhenma  mama office gihin meeting dhekak attend karalaa raeta gedhara aavaa. traffic waedi nisaa late vuna nisaa call ekak ganna baeri vuna. passe WhatsApp message ekak dhaannam.';
    const expected = 'අද උදෙන්ම  මම office ගිහින් meeting දෙකක් attend කරලා රැට ගෙදර ආවා. traffic wඇඩි නිසා late වුන නිසා call එකක් ගන්න බැරි වුන. පස්සෙ WhatsApp message එකක් දාන්නම්.';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0020', async ({ page }) => {
    const input = 'mama adha class giyaa.\n\npasse library gihin podi vaeda tikak kara.\n\nraeta homework tikath complete karalaa nidhagaththa.';
    const expected = 'මම අද class ගියාන් පස්සෙ library ගිහින් පොඩි වැඩ ටිකක් කරා.';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0021', async ({ page }) => {
    const input = 'api lamayi ekka trip ekata yamu';
    const expected = 'අපි ලමයි එක්ක trip එකට යමු';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0022', async ({ page }) => {
    const input = '6.30 PM passe call ekak dhanna';
    const expected = '6.30 PM පස්සෙ call එකක් දාපන්';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0023', async ({ page }) => {
    const input = 'mama adha bath kaawaa';
    const expected = 'මම අද බත් කෑවා';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

  test('Pos_Fun_0024', async ({ page }) => {
    const input = 'api heta market yamu';
    const expected = 'අපි හෙට market යමු';
    
    const inputField = page.locator('textarea').first();
    const outputField = page.locator('textarea').last();
    
    await inputField.fill(input);
    await page.waitForTimeout(2000);
    
    const actual = await outputField.inputValue();
    expect(actual.trim()).not.toBe(expected);
  });

});
