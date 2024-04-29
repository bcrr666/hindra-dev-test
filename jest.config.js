module.exports = {
    roots: ['<rootDir>/src'],
    testMatch: ["**/*.steps.js"],
    transform: {
      '\\.js$': '<rootDir>/node_modules/babel-jest'
    },
    testTimeout: 20000
}