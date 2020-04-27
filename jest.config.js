module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    'CellType/(.*)': '<rootDir>/typescript/CellType/$1'
  }
};
