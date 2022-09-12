const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    'jest.config.js',
    '<rootDir>/.next/',
    'next.config.js',
    'node_modules',
    '<rootDir>/public',
  ],
  collectCoverageFrom: ['<rootDir>/src/pages', '**/*.{js,jsx,tsx}'],
  coveragePathIgnorePatterns: [
    '<rootDir>/coverage/',
    'jest.config.js',
    '<rootDir>/.next/',
    'next.config.js',
    '<rootDir>/public',
    'postcss.config.js',
    'tailwind.config.js',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 92.5,
      lines: 100,
      statements: 96,
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
