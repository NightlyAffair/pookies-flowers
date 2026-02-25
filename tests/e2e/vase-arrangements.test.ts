/**
 * Vase Arrangements page (/vase-arrangements) tests.
 * Covers hero, how-it-works steps, monthly gallery, and subscription CTA.
 */

import { WebDriver, By, until } from 'selenium-webdriver';
import { createDriver, BASE_URL } from './helpers/driver';

describe('Vase Arrangements Page (/vase-arrangements)', () => {
  let driver: WebDriver;

  beforeAll(async () => {
    driver = await createDriver();
    await driver.get(`${BASE_URL}/vase-arrangements`);
    await driver.wait(until.elementLocated(By.css('body')), 10_000);
  });

  afterAll(async () => {
    if (driver) await driver.quit();
  });

  // ─── Hero ──────────────────────────────────────────────────────────────────

  describe('Hero Section', () => {
    test('displays page heading "Vase Arrangements"', async () => {
      const heading = await driver.findElement(
        By.xpath('//h1[contains(normalize-space(.), "Vase Arrangements")]')
      );
      expect(await heading.getText()).toContain('Vase Arrangements');
    });

    test('displays subheading "A fresh burst of joy, delivered on repeat."', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "A fresh burst of joy, delivered on repeat.")]')
      );
      expect(el).toBeTruthy();
    });
  });

  // ─── How It Works ──────────────────────────────────────────────────────────

  describe('How It Works Section', () => {
    test('displays section heading "How It Works"', async () => {
      const heading = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "How It Works")]')
      );
      expect(heading).toBeTruthy();
    });

    test('step 1 displays number "1"', async () => {
      const el = await driver.findElement(
        By.xpath('//*[normalize-space(text())="1"]')
      );
      expect(el).toBeTruthy();
    });

    test('step 1 displays title "Pick your plan"', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Pick your plan")]')
      );
      expect(el).toBeTruthy();
    });

    test('step 1 displays description about delivery frequency', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Choose weekly, bi-weekly, or monthly deliveries")]')
      );
      expect(el).toBeTruthy();
    });

    test('step 2 displays number "2"', async () => {
      const el = await driver.findElement(
        By.xpath('//*[normalize-space(text())="2"]')
      );
      expect(el).toBeTruthy();
    });

    test('step 2 displays title "We arrange fresh blooms"', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "We arrange fresh blooms")]')
      );
      expect(el).toBeTruthy();
    });

    test('step 2 displays description about seasonal flowers', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Each bouquet is uniquely crafted with seasonal flowers")]')
      );
      expect(el).toBeTruthy();
    });

    test('step 3 displays number "3"', async () => {
      const el = await driver.findElement(
        By.xpath('//*[normalize-space(text())="3"]')
      );
      expect(el).toBeTruthy();
    });

    test('step 3 displays title "Enjoy your flowers!"', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Enjoy your flowers!")]')
      );
      expect(el).toBeTruthy();
    });

    test('step 3 displays description about brightening your space', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Brighten your space with beautiful blooms")]')
      );
      expect(el).toBeTruthy();
    });
  });

  // ─── Monthly Arrangement Gallery ──────────────────────────────────────────

  describe('Past Arrangements Gallery', () => {
    test('displays gallery heading "Past Arrangements"', async () => {
      const heading = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Past Arrangements")]')
      );
      expect(heading).toBeTruthy();
    });

    test('displays November 2025 arrangement', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "November")]')
      );
      expect(await el.getText()).toContain('November');
    });

    test('displays December 2025 arrangement', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "December")]')
      );
      expect(await el.getText()).toContain('December');
    });

    test('displays January 2026 arrangement', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "January")]')
      );
      expect(await el.getText()).toContain('January');
    });

    test('displays February 2026 arrangement', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "February")]')
      );
      expect(await el.getText()).toContain('February');
    });

    test('gallery contains at least 4 arrangement cards', async () => {
      // Each card has an img — count images inside the gallery section
      const images = await driver.findElements(
        By.xpath('//section[.//h2[contains(., "Past Arrangements")]]//img')
      );
      expect(images.length).toBeGreaterThanOrEqual(4);
    });
  });

  // ─── Subscription CTA ─────────────────────────────────────────────────────

  describe('Subscription CTA Section', () => {
    test('displays heading "Ready to brighten your space?"', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Ready to brighten your space?")]')
      );
      expect(el).toBeTruthy();
    });

    test('displays "Subscribe Now" button', async () => {
      const btn = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Subscribe Now")]')
      );
      expect(btn).toBeTruthy();
    });

    test('displays "Cancel anytime. Happiness guaranteed."', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Cancel anytime. Happiness guaranteed.")]')
      );
      expect(el).toBeTruthy();
    });
  });
});
