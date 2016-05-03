# eslint-config-rapid7

This package provides Rapid7's .eslintrc as an extensible shared config. 

The master branch coincides to the 1.x.x and beyond versions, which are compatible with ESLint 2.x.x. If 
you are still using ESLint 1.x.x, use the 0.x.x versions (latest version is 0.0.15).

## Usage

We export three ESLint configurations for your usage.

### eslint-config-rapid7

Our default export contains all of our ESLint rules, including EcmaScript 6+
and React. It requires `eslint`, `eslint-plugin-jsx-a11y`, `eslint-plugin-import`, and `eslint-plugin-react`.

1. `npm i eslint-config-rapid7 eslint eslint-plugin-jsx-a11y eslint-plugin-import eslint-plugin-react --save-dev`
2. add `"extends": "rapid7"` to your .eslintrc

### eslint-config-rapid7/base

Lints ES6+ but does not lint React. Requires `eslint` and `eslint-plugin-import`.

1. `npm i eslint eslint-config-rapid7 eslint-plugin-import --save-dev`
2. add `"extends": "rapid7/base"` to your .eslintrc

### eslint-config-rapid7/legacy

Lints ES5 and below. Only requires `eslint`.

1. `npm i eslint eslint-config-rapid7 --save-dev`
2. add `"extends": "rapid7/legacy"` to your .eslintrc

See [Rapid7's Javascript styleguide](https://github.com/rapid7/javascript-style-guide) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like
anything involving regexes. Perhaps in a distant future, we could use literate
programming to structure our README as test cases for our .eslintrc?
