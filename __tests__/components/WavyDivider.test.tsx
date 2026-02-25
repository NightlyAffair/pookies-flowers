import React from 'react';
import { render } from '@testing-library/react';
import { WavyDivider } from '@/components/WavyDivider';

describe('WavyDivider', () => {
  it('renders an SVG element', () => {
    const { container } = render(<WavyDivider />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('uses default fill color #0F2044', () => {
    const { container } = render(<WavyDivider />);
    expect(container.querySelector('path')).toHaveAttribute('fill', '#0F2044');
  });

  it('uses a custom color when provided', () => {
    const { container } = render(<WavyDivider color="#E88AB5" />);
    expect(container.querySelector('path')).toHaveAttribute('fill', '#E88AB5');
  });

  it('uses cream color #F5EDE0 when specified', () => {
    const { container } = render(<WavyDivider color="#F5EDE0" />);
    expect(container.querySelector('path')).toHaveAttribute('fill', '#F5EDE0');
  });

  it('applies rotate-180 class when flip is true', () => {
    const { container } = render(<WavyDivider flip />);
    expect(container.firstChild).toHaveClass('rotate-180');
  });

  it('does not apply rotate-180 when flip is false (default)', () => {
    const { container } = render(<WavyDivider />);
    expect(container.firstChild).not.toHaveClass('rotate-180');
  });

  it('always has the w-full class', () => {
    const { container } = render(<WavyDivider />);
    expect(container.firstChild).toHaveClass('w-full');
  });
});
