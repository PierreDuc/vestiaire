Feature('buy_shit');

Scenario('Lets see if it buys',  ({ I }) => {
  I.amOnPage('/women-clothing/tops/max-mara/brown-wool-max-mara-top-39115273.shtml');
  I.waitForElement('[data-vc-dd-action-name="pdp_buy_button"]', 3600);
  I.click('[data-vc-dd-action-name="pdp_buy_button"]');
  I.waitForElement('[data-cy="add_to_cart_modal_continue_shopping"]', 3600);
  I.click('[data-cy="add_to_cart_modal_continue_shopping"]');
  I.waitForElement('[data-testid="payment_button_loading"]:not(:disabled)', 3600);
  I.click('[data-testid="payment_button_loading"]');
});
