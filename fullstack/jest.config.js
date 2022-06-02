module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', '.mock.js'],
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/'],
  verbose: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  maxConcurrency: 10,
  transform: {}
};
