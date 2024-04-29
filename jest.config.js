module.exports = {
    roots: ['<rootDir>/src'],
    testMatch: ["**/*.test.js"],
    transform: {
      '\\.js$': '<rootDir>/node_modules/babel-jest'
    },
    testTimeout: 20000
}