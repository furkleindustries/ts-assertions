module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: [
    '**/tests/**/*.test.{j,t}s',
    '<rootDir>/src/**/?(*.)(spec|test).{j,t}s',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  setupFiles: [],
};
