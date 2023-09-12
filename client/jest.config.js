// jest.config.js
module.exports = {
  transform: {
    testEnvironment: "node",
    transform: {},
    preset: "ts-jest/presets/default-esm",
    extensionsToTreatAsEsm: [".js"],
    "^.+\\.js$": "babel-jest",
  },
};
