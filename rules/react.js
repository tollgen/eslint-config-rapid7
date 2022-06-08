module.exports = {
  plugins: [
    'react',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'jsx-quotes': [2, 'prefer-double'],

    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-closing-bracket-location': 2,
    'react/jsx-closing-tag-location': 2,
    'react/jsx-curly-spacing': [2, 'never'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js'],
      },
    ],
    'react/jsx-first-prop-new-line': 2,
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': [
      2,
      {
        maximum: 1,
      },
    ],
    'react/jsx-no-bind': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-target-blank': 2,
    'react/jsx-no-undef': 1,
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-props': 2,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/jsx-wrap-multilines': 2,
    'react/no-array-index-key': 1,
    'react/no-deprecated': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-is-mounted': 2,
    'react/prefer-es6-class': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/require-render-return': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': [
      1,
      {
        groups: {
          lifecycle: [
            'displayName',
            'propTypes',
            'contextTypes',
            'childContextTypes',
            'defaultProps',
            'getDefaultProps',
            'getChildContext',
            'getInitialState',
            'state',
            'constructor',
            'getDerivedStateFromProps',
            'componentWillMount',
            'UNSAFE_componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'UNSAFE_componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'UNSAFE_componentWillUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
            'statics',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
        order: [
          'type-annotations',
          'lifecycle',
          'static-methods',
          'instance-variables',
          'instance-methods',
          'everything-else',
          'rendering',
        ],
      },
    ],
    'react/style-prop-object': 2,
    'react/void-dom-elements-no-children': 2,
  },
};
