module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@Conway(.*)': '<rootDir>/typescript/$1'
  },
  coveragePathIgnorePatterns:[
    'node_modules',
    '<rootDir>/jest-serialize-conway.js'
  ]
};
