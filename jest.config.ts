import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  rootDir: 'src',
  testEnvironment: 'jsdom',
  transform: {
    '^.+.tsx?$': ['ts-jest', {}],
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
};

export default config;
