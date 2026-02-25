import { Builder, WebDriver } from 'selenium-webdriver';
import { Options } from 'selenium-webdriver/chrome';
import 'chromedriver';

export const BASE_URL = process.env.BASE_URL ?? 'http://localhost:3000';

// Design system colors from figma prototype
export const COLORS = {
  navy: '#0F2044',       // rgb(15, 32, 68)
  cream: '#F5EDE0',      // rgb(245, 237, 224)
  pink: '#E88AB5',       // rgb(232, 138, 181)
} as const;

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

export function hexToRgbParts(hex: string): { r: number; g: number; b: number } {
  return {
    r: parseInt(hex.slice(1, 3), 16),
    g: parseInt(hex.slice(3, 5), 16),
    b: parseInt(hex.slice(5, 7), 16),
  };
}

export function matchesColor(computedColor: string, hex: string): boolean {
  const { r, g, b } = hexToRgbParts(hex);
  // Chrome returns rgb(r, g, b) or rgba(r, g, b, a)
  return (
    computedColor === `rgb(${r}, ${g}, ${b})` ||
    computedColor === `rgba(${r}, ${g}, ${b}, 1)`
  );
}

export async function getBgColor(driver: WebDriver, element: object): Promise<string> {
  return driver.executeScript(
    'return window.getComputedStyle(arguments[0]).backgroundColor',
    element
  ) as Promise<string>;
}

export async function getColor(driver: WebDriver, element: object): Promise<string> {
  return driver.executeScript(
    'return window.getComputedStyle(arguments[0]).color',
    element
  ) as Promise<string>;
}
