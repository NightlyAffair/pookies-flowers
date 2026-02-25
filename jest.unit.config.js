/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/__tests__/**/*.test.{ts,tsx}'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { tsconfig: 'tsconfig.unit.json' }],
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^motion/react$': '<rootDir>/__mocks__/motion/react.tsx',
    '^next/link$': '<rootDir>/__mocks__/next/link.tsx',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  verbose: true,
};
