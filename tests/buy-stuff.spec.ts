import {test, chromium} from '@playwright/test';

const urlOfProduct = 'https://us.vestiairecollective.com/women-bags/handbags/dolce-gabbana/multicolour-leather-dolce-gabbana-handbag-49978905.shtml';
const localUser = 'pk85'
const localChromeDirectory = `C:/Users/${localUser}/AppData/Local/Google/Chrome/User Data`;

test('buy stuff', async () => {
  const context = await chromium.launchPersistentContext(
    localChromeDirectory,
    {
      headless: false,
      channel: 'chrome',
    });

  const page = context.pages()[0];

  await page.goto(urlOfProduct);

  while (true) {
    try {
      await page.click('[data-vc-dd-action-name="pdp_buy_button"]:not(:disabled)', { timeout: 500 });
      await page.click('[data-vc-dd-action-name="proceed_to_checkout_from_cart_modal"]:not(:disabled)', { timeout: 500 });
      await page.waitForURL(/shop\/checkout/, { timeout: 1000 });
      break;
    } catch {
      await page.reload();
    }
  }
  // await page.click('.paymentButtonsWrapper .paymentButton:not(:disabled)');
});
