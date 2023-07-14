// Import puppeteer
import puppeteer from "puppeteer";

(async () => {
  // Launch the browser
  // Headless mode refers to running a browser without a graphical user interface (GUI). When headless: true is set, Puppeteer launches the browser in the background without displaying any windows or UI elements.
  const browser = await puppeteer.launch({ headless: false });

  // Create a page
  const page = await browser.newPage();

  // Go to Web site
  await page.goto(
    "https://swap.defillama.com/?chain=arbitrum&from=0x0000000000000000000000000000000000000000"
  );

  // Wait for the element to appear

  const chainInput = await page.waitForSelector("#react-select-2-input");
  await chainInput.type("Arbitrum One");

  // Press Enter key to confirm selection
  await page.keyboard.press("Enter");

  // Wait for the input box to appear

  const youSellValue = await page.waitForSelector(".css-lv0ed5");
  // Clear the existing value of the input box
  await page.evaluate((el) => (el.value = ""), youSellValue);
  await youSellValue.type("12");

  // click on Select Token Component
  await page.click(".jUxgJZ");

  const youSellSelect = await page.waitForSelector(".jUxgJZ");
  await youSellSelect.type("Wrapped BTC");

  // wait for component loading
  setTimeout(async () => {
    const youSellToken = await page.waitForSelector(".css-72rvq0");
    youSellToken.click();

    // wait for component loading
    setTimeout(async () => {
      const youBuySelect = (await page.$x("//*[text()='Select Token']"))[0];
      youBuySelect.click();
      const youBuySelectInput = await page.waitForSelector(".jUxgJZ");
      await youBuySelectInput.type("USD Coin");
      const youBuySelectToken = (
        await page.$x("//*[text()='USD Coin (USDC)']")
      )[0];
      youBuySelectToken.click();
    }, 2000);

    // select rout components
    const components = await page.waitForSelector(".knYyMy");

    await components.click();
  }, 1 * 3 * 1000);

  // Close the browser after 2 minutes
  setTimeout(async () => {
    await browser.close();
  }, 2 * 60 * 1000); // 2 minutes in milliseconds
})();
