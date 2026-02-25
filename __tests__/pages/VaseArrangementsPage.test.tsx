import React from 'react';
import { render, screen } from '@testing-library/react';
import VaseArrangementsPage from '@/app/vase-arrangements/page';

describe('VaseArrangementsPage', () => {
  describe('Hero section', () => {
    it('renders the page h1 heading', () => {
      render(<VaseArrangementsPage />);
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Vase Arrangements');
    });

    it('renders the hero subheading', () => {
      render(<VaseArrangementsPage />);
      expect(screen.getByText('A fresh burst of joy, delivered on repeat.')).toBeInTheDocument();
    });
  });

  describe('How It Works section', () => {
    it('renders the section heading', () => {
      render(<VaseArrangementsPage />);
      expect(screen.getByText('How It Works')).toBeInTheDocument();
    });

    it('renders step 1', () => {
      render(<VaseArrangementsPage />);
      expect(screen.getByText('Pick your plan')).toBeInTheDocument();
      expect(screen.getByText('Choose weekly, bi-weekly, or monthly deliveries')).toBeInTheDocument();
    });

    it('renders step 2', () => {
      render(<VaseArrangementsPage />);
      expect(screen.getByText('We arrange fresh blooms')).toBeInTheDocument();
      expect(screen.getByText('Each bouquet is uniquely crafted with seasonal flowers')).toBeInTheDocument();
    });

    it('renders step 3', () => {
      render(<VaseArrangementsPage />);
      expect(screen.getByText('Enjoy your flowers!')).toBeInTheDocument();
      expect(screen.getByText('Brighten your space with beautiful blooms')).toBeInTheDocument();
    });
  });

  describe('Past Arrangements gallery', () => {
    it('renders the gallery heading', () => {
      render(<VaseArrangementsPage />);
      expect(screen.getByText('Past Arrangements')).toBeInTheDocument();
    });

    it('renders a card for November', () => {
      render(<VaseArrangementsPage />);
      expect(screen.getByText('November')).toBeInTheDocument();
    });

    it('renders a card for December', () => {
      render(<VaseArrangementsPage />);
      expect(screen.getByText('December')).toBeInTheDocument();
    });

    it('renders a card for January', () => {
      render(<VaseArrangementsPage />);
      expect(screen.getByText('January')).toBeInTheDocument();
    });

    it('renders a card for February', () => {
      render(<VaseArrangementsPage />);
      expect(screen.getByText('February')).toBeInTheDocument();
    });

    it('renders correct years on cards', () => {
      render(<VaseArrangementsPage />);
      const years2025 = screen.getAllByText('2025');
      const years2026 = screen.getAllByText('2026');
      expect(years2025.length).toBe(2); // November and December
      expect(years2026.length).toBeGreaterThanOrEqual(2); // January and February (footer also has 2026)
    });
  });

  describe('Subscribe CTA section', () => {
    it('renders the CTA heading', () => {
      render(<VaseArrangementsPage />);
      expect(screen.getByText('Ready to brighten your space?')).toBeInTheDocument();
    });

    it('renders the Subscribe Now button', () => {
      render(<VaseArrangementsPage />);
      expect(screen.getByRole('button', { name: 'Subscribe Now' })).toBeInTheDocument();
    });

    it('renders the cancellation policy', () => {
      render(<VaseArrangementsPage />);
      expect(screen.getByText('Cancel anytime. Happiness guaranteed.')).toBeInTheDocument();
    });
  });
});
