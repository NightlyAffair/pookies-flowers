/**
 * Custom Bouquets page (/custom-bouquets) tests.
 * Covers hero, occasions section, past work gallery, order form, and testimonial.
 */

import { WebDriver, By, until } from 'selenium-webdriver';
import { createDriver, BASE_URL } from './helpers/driver';

describe('Custom Bouquets Page (/custom-bouquets)', () => {
  let driver: WebDriver;

  beforeAll(async () => {
    driver = await createDriver();
    await driver.get(`${BASE_URL}/custom-bouquets`);
    await driver.wait(until.elementLocated(By.css('body')), 10_000);
    // Scroll to bottom to trigger all whileInView animations, then back to top
    await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
    await driver.sleep(1000);
    await driver.executeScript('window.scrollTo(0, 0)');
  });

  afterAll(async () => {
    if (driver) await driver.quit();
  });

  // ─── Hero ──────────────────────────────────────────────────────────────────

  describe('Hero Section', () => {
    test('displays page heading "Custom Bouquets"', async () => {
      const heading = await driver.findElement(
        By.xpath('//h1[contains(normalize-space(.), "Custom Bouquets")]')
      );
      expect(await heading.getText()).toContain('Custom Bouquets');
    });

    test('displays subheading "Tell us the vibe. We\'ll make it bloom."', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Tell us the vibe")]')
      );
      expect(await el.getText()).toContain("Tell us the vibe. We'll make it bloom.");
    });
  });

  // ─── Occasions ─────────────────────────────────────────────────────────────

  describe('Perfect for Every Occasion Section', () => {
    test('displays section heading "Perfect for Every Occasion"', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Perfect for Every Occasion")]')
      );
      expect(el).toBeTruthy();
    });

    test('displays "Birthdays" occasion card', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Birthdays")]')
      );
      expect(el).toBeTruthy();
    });

    test('displays "Anniversaries" occasion card', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Anniversaries")]')
      );
      expect(el).toBeTruthy();
    });

    test('displays "Just Because" occasion card', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Just Because")]')
      );
      expect(el).toBeTruthy();
    });

    test('displays "Sympathy" occasion card', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Sympathy")]')
      );
      expect(el).toBeTruthy();
    });

    test('renders exactly 4 occasion cards', async () => {
      const cards = await driver.findElements(
        By.xpath('//section[.//h2[contains(., "Perfect for Every Occasion")]]//h3')
      );
      expect(cards.length).toBe(4);
    });
  });

  // ─── Past Work Gallery ────────────────────────────────────────────────────

  describe('Past Work Gallery', () => {
    test('displays gallery heading "Some bouquets we\'ve loved making"', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Some bouquets we")]')
      );
      expect(await el.getText()).toContain("Some bouquets we've loved making");
    });

    test('displays gallery subtitle "Each one tells a unique story"', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Each one tells a unique story")]')
      );
      expect(el).toBeTruthy();
    });

    test('gallery contains 6 bouquet images', async () => {
      const images = await driver.findElements(
        By.xpath('//section[.//h2[contains(., "bouquets we")]]//img')
      );
      expect(images.length).toBe(6);
    });

    test('all gallery images have descriptive alt text', async () => {
      const images = await driver.findElements(
        By.xpath('//section[.//h2[contains(., "bouquets we")]]//img')
      );
      for (const img of images) {
        const alt = await img.getAttribute('alt');
        expect(alt).toBeTruthy();
        expect(alt!.length).toBeGreaterThan(0);
      }
    });
  });

  // ─── Order Form ───────────────────────────────────────────────────────────

  describe('Order Form', () => {
    test('displays form heading "Let\'s create something beautiful together"', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Let\'s create something beautiful together")]')
      );
      expect(el).toBeTruthy();
    });

    test('form has "Your Name" label and input', async () => {
      const label = await driver.findElement(
        By.xpath('//label[@for="name"]')
      );
      expect(await label.getText()).toContain('Your Name');

      const input = await driver.findElement(By.id('name'));
      expect(await input.getAttribute('placeholder')).toBe('Jane Doe');
    });

    test('form has "Occasion" label and input', async () => {
      const label = await driver.findElement(
        By.xpath('//label[@for="occasion"]')
      );
      expect(await label.getText()).toContain('Occasion');

      const input = await driver.findElement(By.id('occasion'));
      expect(await input.getAttribute('placeholder')).toBe('Birthday celebration');
    });

    test('form has "Color Preferences" label and input', async () => {
      const label = await driver.findElement(
        By.xpath('//label[@for="colors"]')
      );
      expect(await label.getText()).toContain('Color Preferences');

      const input = await driver.findElement(By.id('colors'));
      expect(await input.getAttribute('placeholder')).toBe('Pinks, purples, and whites');
    });

    test('form has message textarea with correct label', async () => {
      const label = await driver.findElement(
        By.xpath('//label[@for="message"]')
      );
      expect(await label.getText()).toContain("Tell us more about what you're envisioning");

      const textarea = await driver.findElement(By.id('message'));
      expect(await textarea.getAttribute('placeholder')).toBe(
        "I'd love something romantic and whimsical..."
      );
    });

    test('form has "Start Your Order" submit button', async () => {
      const btn = await driver.findElement(
        By.xpath('//button[@type="submit"][contains(normalize-space(.), "Start Your Order")]')
      );
      expect(btn).toBeTruthy();
    });

    test('user can type into the name field', async () => {
      const input = await driver.findElement(By.id('name'));
      await input.clear();
      await input.sendKeys('Jane Doe');
      expect(await input.getAttribute('value')).toBe('Jane Doe');
    });

    test('user can type into the occasion field', async () => {
      const input = await driver.findElement(By.id('occasion'));
      await input.clear();
      await input.sendKeys('Birthday celebration');
      expect(await input.getAttribute('value')).toBe('Birthday celebration');
    });

    test('user can type into the color preferences field', async () => {
      const input = await driver.findElement(By.id('colors'));
      await input.clear();
      await input.sendKeys('Pinks and purples');
      expect(await input.getAttribute('value')).toBe('Pinks and purples');
    });

    test('user can type into the message textarea', async () => {
      const textarea = await driver.findElement(By.id('message'));
      await textarea.clear();
      await textarea.sendKeys('Something romantic and whimsical.');
      expect(await textarea.getAttribute('value')).toBe('Something romantic and whimsical.');
    });
  });

  // ─── Testimonial ──────────────────────────────────────────────────────────

  describe('Testimonial Strip', () => {
    test('displays testimonial quote', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "She made my mom cry happy tears!")]')
      );
      expect(await el.getText()).toContain('She made my mom cry happy tears!');
    });

    test('displays attribution "— Sarah M."', async () => {
      const el = await driver.findElement(
        By.xpath('//*[contains(normalize-space(.), "Sarah M.")]')
      );
      expect(await el.getText()).toContain('Sarah M.');
    });
  });
});
