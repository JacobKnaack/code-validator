'use strict';

const fs = require('fs');
const fetchSource = require('./src/fetchSource.js');

/**
 * TODO What environment is this going to be used?
 * Continuous Integration library.
 * Test library.
  */
if (process.argv[2]) {
  // run as node terminal script
} else if (process.argv[3]) {
  // run with test source path as well
}

module.exports = {
  config: function(repoPath, testPath) {
    process.env.TEST_PATH = repoPath;
    process.env.REPO_PATH = testPath;
  },
  validate: function(repoPath, testPath) {
    try {
      fetchSource(
      repoPath || process.env.REPO_PATH,
  'repo_source'
      );
      fetchSource(
      testPath || process.env.TEST_PATH,
  'test_source'
      );
    } catch(e) {
      console.error(e);
    }
  }
}
