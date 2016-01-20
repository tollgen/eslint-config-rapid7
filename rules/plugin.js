module.exports = {
  plugins: [
    'eslint-plugin-rapid7'
  ],
  rules: {
    'rapid7/static-magic-numbers': [2, {
        ignore: [0, 1, 2, -1],
        detectObjects: true,
        enforceConst: true,
        allowStatic: true,
        detectClassProperties: true
      }],
    'rapid7/static-screaming-snake': [2, {
      ignore: ['propTypes', 'defaultProps']
    }]
  }
};
