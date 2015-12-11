module.exports = {
  rules: {
    'lines-around-comment': [1, {
      beforeBlockComment: true,
      beforeLineComment: true,
      allowBlockStart: true,
      allowBlockEnd: true,
      allowObjectStart: true,
      allowObjectEnd: true,
      allowArrayStart: true,
      allowArrayEnd: true
    }],
    'max-nested-callbacks': [1, 3],
    'new-parens': true,
    'newline-after-var': [2, 'always'],
    'no-array-constructor': 2,
    'no-inline-comments': 1,
    'no-lonely-if': 1,
    'no-multiple-empty-lines': [2, {
      max: 1,
      maxEOF: 1
    }],
    'no-unneeded-ternary': 2,
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, 'after'],
    'quote-props': [2, 'as-needed'],
    'quote': [2, 'single'],
    'space-unary-ops': 2
  }
};
