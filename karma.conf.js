/* eslint-disable import/no-extraneous-dependencies */
const createDefaultConfig = require('@open-wc/testing-karma/default-config');
const merge = require('webpack-merge');

module.exports = (config) => {
  config.set(
    merge(createDefaultConfig(config), {
      files: [
        // runs all files ending with .test in the test folder,
        // can be overwritten by passing a --grep flag. examples:
        //
        // npm run test -- --grep test/foo/bar.test.js
        // npm run test -- --grep test/bar/*
        { pattern: config.grep ? config.grep : 'test/**/*.test.js', type: 'module' },
        'node_modules/accessibility-developer-tools/dist/js/axs_testing.js'
      ],

      // coverageIstanbulReporter: {
      //   thresholds: {
      //     global: {
      //       statements: 80,
      //       branches: 78,
      //       functions: 90,
      //       lines: 80
      //     }
      //   }
      // }
    }),
  );
  return config;
};
