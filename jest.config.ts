const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  collectCoverageFrom: ['<rootDir>/src/components/**/*.{ts,tsx}'],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      lines: 90,
      statements: 90
    }
  },
  coverageReporters: ['json', 'html'],
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@mui/styled-engine$': '<rootDir>/node_modules/@mui/styled-engine-sc',
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/src/__tests__/jest.setup.js',
    '<rootDir>/src/__tests__/test-utils.tsx'
  ]
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
