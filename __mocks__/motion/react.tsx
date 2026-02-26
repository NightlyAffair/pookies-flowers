import React from 'react';

type MotionProps = {
  children?: React.ReactNode;
  initial?: unknown;
  animate?: unknown;
  transition?: unknown;
  whileInView?: unknown;
  viewport?: unknown;
  whileHover?: unknown;
  whileTap?: unknown;
  exit?: unknown;
  variants?: unknown;
  [key: string]: unknown;
};

function createMotionComponent(tag: string) {
  const Component = React.forwardRef<HTMLElement, MotionProps>(
    ({ children, initial, animate, transition, whileInView, viewport, whileHover, whileTap, exit, variants, ...props }, ref) => {
      return React.createElement(tag, { ...(props as Record<string, unknown>), ref }, children as React.ReactNode);
    }
  );
  Component.displayName = `motion.${tag}`;
  return Component;
}

export const motion = new Proxy({} as Record<string, ReturnType<typeof createMotionComponent>>, {
  get(_, prop: string) {
    return createMotionComponent(prop);
  },
});
