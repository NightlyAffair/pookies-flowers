import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '@/components/Header';

describe('Header', () => {
  it('renders the logo image with correct src and alt', () => {
    render(<Header />);
    const logo = screen.getByAltText("Pookie's Flowers");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/Logo/logo.jpg');
  });

  it('renders all three navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Vase Arrangements')).toBeInTheDocument();
    expect(screen.getByText('Custom Bouquets')).toBeInTheDocument();
  });

  it('Home link points to /', () => {
    render(<Header />);
    expect(screen.getByText('Home').closest('a')).toHaveAttribute('href', '/');
  });

  it('Vase Arrangements link points to /vase-arrangements', () => {
    render(<Header />);
    expect(screen.getByText('Vase Arrangements').closest('a')).toHaveAttribute('href', '/vase-arrangements');
  });

  it('Custom Bouquets link points to /custom-bouquets', () => {
    render(<Header />);
    expect(screen.getByText('Custom Bouquets').closest('a')).toHaveAttribute('href', '/custom-bouquets');
  });

  it('logo links back to home page', () => {
    render(<Header />);
    const logo = screen.getByAltText("Pookie's Flowers");
    expect(logo.closest('a')).toHaveAttribute('href', '/');
  });
});
