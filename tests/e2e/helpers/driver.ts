import { Builder, WebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
// selenium-webdriver 4.11+ includes selenium-manager which auto-downloads
// the correct ChromeDriver for the installed Chrome version — no manual
// chromedriver import needed.

export const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000';

export async function createDriver(): Promise<WebDriver> {
  const options = new Options();
  if (process.env.HEADLESS !== 'false') {
    options.addArguments('--headless=new');
  }
  options.addArguments(
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--window-size=1280,800',
    '--disable-gpu'
  );
  return new Builder().forBrowser('chrome').setChromeOptions(options).build();
}

// Design system colors (hex → rgb string Chrome returns)
export const COLORS = {
  navy: 'rgb(15, 32, 68)',    // #0F2044
  cream: 'rgb(245, 237, 224)', // #F5EDE0
  pink: 'rgb(232, 138, 181)',  // #E88AB5
};

export async function getBgColor(driver: WebDriver, element: object): Promise<string> {
  return driver.executeScript(
    'return window.getComputedStyle(arguments[0]).backgroundColor',
    element
  ) as Promise<string>;
}
