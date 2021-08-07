module.exports = {
  // setupTestFrameworkScriptFile has been deprecated in
  // favor of setupFilesAfterEnv in jest 24
  testEnvironment: 'node',
  setupFilesAfterEnv: [ './jest.setup.js' ],
};
