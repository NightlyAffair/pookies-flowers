import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/Footer';

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />);
    expect(screen.getByText("Pookie's Flowers")).toBeInTheDocument();
  });

  it('renders copyright text with year 2026', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 Pookie's Flowers/)).toBeInTheDocument();
  });

  it('renders Instagram social link with aria-label', () => {
    render(<Footer />);
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
  });

  it('renders Facebook social link with aria-label', () => {
    render(<Footer />);
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
  });

  it('renders Twitter social link with aria-label', () => {
    render(<Footer />);
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
  });

  it('renders "Made with love" tagline in copyright', () => {
    render(<Footer />);
    expect(screen.getByText(/Made with love from our home to yours/)).toBeInTheDocument();
  });
});
