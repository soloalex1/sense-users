import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  rootDir: 'src',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['src/test'],
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
};

export default config;
