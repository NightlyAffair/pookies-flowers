import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('renders the hero headline', () => {
    render(<HomePage />);
    expect(screen.getByText('Flowers that make you smile')).toBeInTheDocument();
  });

  it('renders Subscribe to Vase Arrangements CTA linking to /vase-arrangements', () => {
    render(<HomePage />);
    const link = screen.getByText('Subscribe to Vase Arrangements');
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', '/vase-arrangements');
  });

  it('renders Order a Custom Bouquet CTA linking to /custom-bouquets', () => {
    render(<HomePage />);
    const link = screen.getByText('Order a Custom Bouquet');
    expect(link).toBeInTheDocument();
    expect(link.closest('a')).toHaveAttribute('href', '/custom-bouquets');
  });

  it('renders the vase arrangements product tagline', () => {
    render(<HomePage />);
    expect(screen.getByText('Fresh blooms delivered to your door, every week.')).toBeInTheDocument();
  });

  it('renders the custom bouquets product tagline', () => {
    render(<HomePage />);
    expect(screen.getByText('Handcrafted for your special moments.')).toBeInTheDocument();
  });

  it('renders the about strip with "Made with love" text', () => {
    render(<HomePage />);
    expect(screen.getByText('Made with love from our home to yours')).toBeInTheDocument();
  });

  it('renders the header', () => {
    render(<HomePage />);
    expect(screen.getByAltText("Pookie's Flowers")).toBeInTheDocument();
  });

  it('renders the footer copyright', () => {
    render(<HomePage />);
    expect(screen.getByText(/© 2026/)).toBeInTheDocument();
  });

  it('renders vase arrangements hero image', () => {
    render(<HomePage />);
    expect(screen.getByAltText('Vase arrangement')).toBeInTheDocument();
  });

  it('renders custom bouquet hero image', () => {
    render(<HomePage />);
    expect(screen.getByAltText('Custom bouquet')).toBeInTheDocument();
  });
});
