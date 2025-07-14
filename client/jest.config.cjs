module.exports = {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.[jt]sx?$': 'babel-jest',
    },
    moduleFileExtensions: ['js', 'jsx'],
    roots: ['<rootDir>/src'],
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
};
