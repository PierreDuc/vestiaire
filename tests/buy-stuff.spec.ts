import {test, chromium} from '@playwright/test';
import {clickPayButton, localUser, urlOfProduct} from "../config";

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
      await page.click('[data-vc-dd-action-name="pdp_buy_button"]:not(:disabled)', { timeout: 750 });
      break;
    } catch {
      await page.reload();
    }
  }

  await page.click('[data-vc-dd-action-name="proceed_to_checkout_from_cart_modal"]:not(:disabled)', { timeout: 15000 });
  await page.waitForURL(/shop\/checkout/, { timeout: 15000 });

  if (clickPayButton) {
    await page.click('.paymentButtonsWrapper .paymentButton:not(:disabled)');
  }

  await new Promise(() => {});
});
