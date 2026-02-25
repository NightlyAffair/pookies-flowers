import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomBouquetsPage from '@/app/custom-bouquets/page';

describe('CustomBouquetsPage', () => {
  describe('Hero section', () => {
    it('renders the page h1 heading', () => {
      render(<CustomBouquetsPage />);
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Custom Bouquets');
    });

    it('renders the hero subheading', () => {
      render(<CustomBouquetsPage />);
      expect(screen.getByText("Tell us the vibe. We'll make it bloom.")).toBeInTheDocument();
    });
  });

  describe('Occasions section', () => {
    it('renders the section heading', () => {
      render(<CustomBouquetsPage />);
      expect(screen.getByText('Perfect for Every Occasion')).toBeInTheDocument();
    });

    it('renders Birthdays occasion', () => {
      render(<CustomBouquetsPage />);
      expect(screen.getByText('Birthdays')).toBeInTheDocument();
    });

    it('renders Anniversaries occasion', () => {
      render(<CustomBouquetsPage />);
      expect(screen.getByText('Anniversaries')).toBeInTheDocument();
    });

    it('renders Just Because occasion', () => {
      render(<CustomBouquetsPage />);
      expect(screen.getByText('Just Because')).toBeInTheDocument();
    });

    it('renders Sympathy occasion', () => {
      render(<CustomBouquetsPage />);
      expect(screen.getByText('Sympathy')).toBeInTheDocument();
    });
  });

  describe('Past Work gallery', () => {
    it('renders the gallery heading', () => {
      render(<CustomBouquetsPage />);
      expect(screen.getByText("Some bouquets we've loved making")).toBeInTheDocument();
    });

    it('renders the gallery subtitle', () => {
      render(<CustomBouquetsPage />);
      expect(screen.getByText('Each one tells a unique story')).toBeInTheDocument();
    });

    it('renders all 6 past work images', () => {
      render(<CustomBouquetsPage />);
      const images = screen.getAllByRole('img');
      const galleryImages = images.filter(img =>
        img.getAttribute('alt')?.match(/bouquet|arrangement/i)
      );
      expect(galleryImages.length).toBeGreaterThanOrEqual(6);
    });
  });

  describe('Order form', () => {
    it('renders the form heading', () => {
      render(<CustomBouquetsPage />);
      expect(screen.getByText("Let's create something beautiful together")).toBeInTheDocument();
    });

    it('renders Your Name field', () => {
      render(<CustomBouquetsPage />);
      expect(screen.getByLabelText('Your Name')).toBeInTheDocument();
    });

    it('renders Occasion field', () => {
      render(<CustomBouquetsPage />);
      expect(screen.getByLabelText('Occasion')).toBeInTheDocument();
    });

    it('renders Color Preferences field', () => {
      render(<CustomBouquetsPage />);
      expect(screen.getByLabelText('Color Preferences')).toBeInTheDocument();
    });

    it('renders the vision message textarea', () => {
      render(<CustomBouquetsPage />);
      expect(screen.getByLabelText(/Tell us more about what you're envisioning/)).toBeInTheDocument();
    });

    it('renders the Start Your Order submit button', () => {
      render(<CustomBouquetsPage />);
      expect(screen.getByRole('button', { name: 'Start Your Order' })).toBeInTheDocument();
    });

    it('Your Name input has correct placeholder', () => {
      render(<CustomBouquetsPage />);
      expect(screen.getByPlaceholderText('Jane Doe')).toBeInTheDocument();
    });

    it('Occasion input has correct placeholder', () => {
      render(<CustomBouquetsPage />);
      expect(screen.getByPlaceholderText('Birthday celebration')).toBeInTheDocument();
    });
  });

  describe('Testimonial section', () => {
    it('renders the customer quote', () => {
      render(<CustomBouquetsPage />);
      expect(screen.getByText('"She made my mom cry happy tears!"')).toBeInTheDocument();
    });

    it('renders the customer attribution', () => {
      render(<CustomBouquetsPage />);
      expect(screen.getByText('— Sarah M.')).toBeInTheDocument();
    });
  });
});
