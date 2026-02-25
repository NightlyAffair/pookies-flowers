import React from 'react';
import { render } from '@testing-library/react';
import { PetalDecoration } from '@/components/PetalDecoration';

describe('PetalDecoration', () => {
  it('renders an SVG element', () => {
    const { container } = render(<PetalDecoration />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('has pink fill color #E88AB5', () => {
    const { container } = render(<PetalDecoration />);
    expect(container.querySelector('svg')).toHaveAttribute('fill', '#E88AB5');
  });

  it('has opacity-20 class for subtle decoration', () => {
    const { container } = render(<PetalDecoration />);
    expect(container.querySelector('svg')).toHaveClass('opacity-20');
  });

  it('is absolutely positioned', () => {
    const { container } = render(<PetalDecoration />);
    expect(container.querySelector('svg')).toHaveClass('absolute');
  });

  it('applies additional className when provided', () => {
    const { container } = render(<PetalDecoration className="w-24 h-24 top-10 left-10" />);
    const svg = container.querySelector('svg')!;
    expect(svg).toHaveClass('w-24');
    expect(svg).toHaveClass('h-24');
    expect(svg).toHaveClass('top-10');
    expect(svg).toHaveClass('left-10');
  });

  it('renders three ellipse petals', () => {
    const { container } = render(<PetalDecoration />);
    expect(container.querySelectorAll('ellipse')).toHaveLength(3);
  });
});
