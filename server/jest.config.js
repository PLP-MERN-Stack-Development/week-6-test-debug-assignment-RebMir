module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'],
    testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
    transform: {
        '^.+\\.[jt]sx?$': 'babel-jest',  // ← This tells Jest to use Babel
    },
};
