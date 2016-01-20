module.exports = {
  extends: [
      'eslint-config-rapid7/legacy',
      'eslint-config-rapid7/rules/es6',
      'eslint-config-rapid7/rules/plugin',
      'eslint-config-rapid7/rules/react'
  ].map(require.resolve),
  rules: {}
};
