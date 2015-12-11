module.exports = {
  rules: {
    'magic-num': [2, {
        ignore: [0, 1, 2, -1],
        detectObjects: true,
        enforceConst: true,
        allowStatic: true,
        detectClassProperties: true
      }],
    'static-screaming-snake': [2, {
      ignore: ['propTypes', 'defaultProps']
    }]
  }
};
