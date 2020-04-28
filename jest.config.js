module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    'CellType/(.*)': '<rootDir>/typescript/CellType/$1'
  },
  coveragePathIgnorePatterns:[
    'node_modules',
    '<rootDir>/jest-serialize-conway.js'
  ]
};
