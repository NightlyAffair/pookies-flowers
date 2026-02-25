/**
 * Home page (/) tests.
 * Covers the hero section, visual product showcase cards, and about strip.
 */

import { WebDriver, By, until } from 'selenium-webdriver';
import { createDriver, BASE_URL, getBgColor, COLORS } from './helpers/driver';

describe('Home Page (/)', () => {
  let driver: WebDriver;

  beforeAll(async () => {
    driver = await createDriver();
    await driver.get(BASE_URL);
    await driver.wait(until.elementLocated(By.css('body')), 10_000);
  });

  afterAll(async () => {
    if (driver) await driver.quit();
  });

  // ─── Hero ──────────────────────────────────────────────────────────────────

  describe('Hero Section', () => {
    test('displays main heading "Flowers that make you smile"', async () => {
      const heading = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Flowers that make you smile")]')
      );
      expect(await heading.getText()).toContain('Flowers that make you smile');
    });

    test('hero section has navy (#0F2044) background', async () => {
      const hero = await driver.findElement(By.css('section'));
      const bg = await getBgColor(driver, hero);
      expect(bg).toBe(COLORS.navy);
    });

    test('has CTA button "Subscribe to Vase Arrangements"', async () => {
      const btn = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Subscribe to Vase Arrangements")]')
      );
      expect(btn).toBeTruthy();
    });

    test('"Subscribe to Vase Arrangements" links to /vase-arrangements', async () => {
      const link = await driver.findElement(
        By.xpath('//a[contains(normalize-space(.), "Subscribe to Vase Arrangements")]')
      );
      expect(await link.getAttribute('href')).toContain('/vase-arrangements');
    });

    test('has CTA button "Order a Custom Bouquet"', async () => {
      const btn = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Order a Custom Bouquet")]')
      );
      expect(btn).toBeTruthy();
    });

    test('"Order a Custom Bouquet" links to /custom-bouquets', async () => {
      const link = await driver.findElement(
        By.xpath('//a[contains(normalize-space(.), "Order a Custom Bouquet")]')
      );
      expect(await link.getAttribute('href')).toContain('/custom-bouquets');
    });
  });

  // ─── Product Showcase Cards ────────────────────────────────────────────────

  describe('Visual Product Showcase', () => {
    test('displays "Vase Arrangements" card title', async () => {
      const els = await driver.findElements(
        By.xpath('//*[contains(normalize-space(.), "Vase Arrangements")]')
      );
      expect(els.length).toBeGreaterThan(0);
    });

    test('displays vase arrangements description "Fresh blooms delivered to your door, every week."', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Fresh blooms delivered to your door, every week.")]')
      );
      expect(el).toBeTruthy();
    });

    test('displays "Custom Bouquets" card title', async () => {
      const els = await driver.findElements(
        By.xpath('//*[contains(normalize-space(.), "Custom Bouquets")]')
      );
      expect(els.length).toBeGreaterThan(0);
    });

    test('displays custom bouquets description "Handcrafted for your special moments."', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Handcrafted for your special moments.")]')
      );
      expect(el).toBeTruthy();
    });

    test('Vase Arrangements card is clickable and navigates to /vase-arrangements', async () => {
      const link = await driver.findElement(
        By.xpath('//a[contains(normalize-space(.), "Vase Arrangements")]')
      );
      const href = await link.getAttribute('href');
      expect(href).toContain('/vase-arrangements');
    });

    test('Custom Bouquets card is clickable and navigates to /custom-bouquets', async () => {
      const link = await driver.findElement(
        By.xpath('//a[contains(normalize-space(.), "Custom Bouquets")]')
      );
      const href = await link.getAttribute('href');
      expect(href).toContain('/custom-bouquets');
    });
  });

  // ─── About Strip ──────────────────────────────────────────────────────────

  describe('About Strip', () => {
    test('displays "Made with love from our home to yours"', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Made with love from our home to yours")]')
      );
      expect(el).toBeTruthy();
    });
  });
});
