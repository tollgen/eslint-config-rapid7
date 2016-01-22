module.exports = {
  rules: {
    'indent': [2, 2, { "SwitchCase": 1, "VariableDeclarator": 2 }],
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
    'new-cap': [2, {
      newIsCap: true,
      properties: false
     }],
    'new-parens': 2,
    'newline-after-var': [2, 'always'],
    'no-array-constructor': 2,
    'no-inline-comments': 1,
    'no-lonely-if': 1,
    'no-multiple-empty-lines': [2, {
      max: 1,
      maxEOF: 1
    }],
    'no-unneeded-ternary': 2,
    // require padding inside curly braces
    'object-curly-spacing': [2, 'never'],
    'one-var': [2, {
      var: 'always',
      let: 'always',
      const: 'never'
    }],
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, "after", {
      overrides: {
        '?': 'before',
        ':': 'before'
      }
    }],
    'quote-props': [2, 'as-needed'],
    'quotes': [2, 'single'],
    'space-unary-ops': 2
  }
};
