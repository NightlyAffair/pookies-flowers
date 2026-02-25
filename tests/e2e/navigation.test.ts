/**
 * Navigation tests — Header and Footer across all pages.
 * Verifies nav links exist, point to the right routes, and that
 * clicking them actually navigates the browser correctly.
 */

import { WebDriver, By, until } from 'selenium-webdriver';
import { createDriver, BASE_URL } from './helpers/driver';

describe('Navigation', () => {
  let driver: WebDriver;

  beforeAll(async () => {
    driver = await createDriver();
    await driver.get(BASE_URL);
    await driver.wait(until.elementLocated(By.css('body')), 10_000);
  });

  afterAll(async () => {
    if (driver) await driver.quit();
  });

  // ─── Header ─────────────────────────────────────────────────────────────────

  describe('Header', () => {
    test('logo image is present', async () => {
      const logo = await driver.findElement(By.css('header img, nav img'));
      expect(logo).toBeTruthy();
    });

    test('logo links to home page (/)', async () => {
      const logoLink = await driver.findElement(By.css('header a:first-child, nav a:first-child'));
      const href = await logoLink.getAttribute('href');
      expect(href).toMatch(/\/$|localhost:3000\/$/);
    });

    test('has "Home" navigation link', async () => {
      const link = await driver.findElement(
        By.xpath('//a[normalize-space(.)="Home"]')
      );
      expect(link).toBeTruthy();
    });

    test('"Home" link points to /', async () => {
      const link = await driver.findElement(
        By.xpath('//a[normalize-space(.)="Home"]')
      );
      expect(await link.getAttribute('href')).toMatch(/\/$|localhost:3000\/$/);
    });

    test('has "Vase Arrangements" navigation link', async () => {
      const link = await driver.findElement(
        By.xpath('//a[normalize-space(.)="Vase Arrangements"]')
      );
      expect(link).toBeTruthy();
    });

    test('"Vase Arrangements" link points to /vase-arrangements', async () => {
      const link = await driver.findElement(
        By.xpath('//a[normalize-space(.)="Vase Arrangements"]')
      );
      expect(await link.getAttribute('href')).toContain('/vase-arrangements');
    });

    test('has "Custom Bouquets" navigation link', async () => {
      const link = await driver.findElement(
        By.xpath('//a[normalize-space(.)="Custom Bouquets"]')
      );
      expect(link).toBeTruthy();
    });

    test('"Custom Bouquets" link points to /custom-bouquets', async () => {
      const link = await driver.findElement(
        By.xpath('//a[normalize-space(.)="Custom Bouquets"]')
      );
      expect(await link.getAttribute('href')).toContain('/custom-bouquets');
    });

    test('clicking "Vase Arrangements" navigates to /vase-arrangements', async () => {
      const link = await driver.findElement(
        By.xpath('//a[normalize-space(.)="Vase Arrangements"]')
      );
      await link.click();
      await driver.wait(until.urlContains('/vase-arrangements'), 5_000);
      expect(await driver.getCurrentUrl()).toContain('/vase-arrangements');
      await driver.navigate().back();
      await driver.wait(until.urlContains(BASE_URL), 5_000);
    });

    test('clicking "Custom Bouquets" navigates to /custom-bouquets', async () => {
      const link = await driver.findElement(
        By.xpath('//a[normalize-space(.)="Custom Bouquets"]')
      );
      await link.click();
      await driver.wait(until.urlContains('/custom-bouquets'), 5_000);
      expect(await driver.getCurrentUrl()).toContain('/custom-bouquets');
      await driver.navigate().back();
      await driver.wait(until.urlContains(BASE_URL), 5_000);
    });
  });

  // ─── Footer ─────────────────────────────────────────────────────────────────

  describe('Footer', () => {
    test('footer element exists on the page', async () => {
      const footer = await driver.findElement(By.css('footer'));
      expect(footer).toBeTruthy();
    });

    test('footer displays "Pookie\'s Flowers"', async () => {
      const footer = await driver.findElement(By.css('footer'));
      const text = await footer.getText();
      expect(text).toContain("Pookie's Flowers");
    });

    test('footer displays copyright year 2026', async () => {
      const footer = await driver.findElement(By.css('footer'));
      expect(await footer.getText()).toContain('2026');
    });

    test('footer displays tagline "Made with love from our home to yours"', async () => {
      const footer = await driver.findElement(By.css('footer'));
      expect(await footer.getText()).toContain('Made with love from our home to yours');
    });

    test('footer has at least 3 social media icon links', async () => {
      const footer = await driver.findElement(By.css('footer'));
      const links = await footer.findElements(By.css('a'));
      expect(links.length).toBeGreaterThanOrEqual(3);
    });
  });
});
