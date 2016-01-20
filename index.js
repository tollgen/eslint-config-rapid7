module.exports = {
  extends: [
      'eslint-config-airbnb',
      'eslint-config-rapid7/base'
  ].map(require.resolve),
  rules: {}
};
