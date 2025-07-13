module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/src/**/*.test.js'],
  roots: ['<rootDir>/server/src', '<rootDir>/client/src'],
  moduleFileExtensions: ['js', 'jsx'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
}