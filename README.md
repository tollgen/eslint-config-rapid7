# eslint-config-rapid7

This package provides Rapid7's .eslintrc as an extensible shared config.

The master branch coincides to the 1.x.x and beyond versions, which are compatible with ESLint 2.x.x. If 
you are still using ESLint 1.x.x, use the 0.x.x versions (latest version is 0.0.15).

## Usage

We export five ESLint configurations for your usage.

### eslint-config-rapid7

Config value: `"extends": "rapid7"`

Lints ES6+ and React

### eslint-config-rapid7/base

Config value: `"extends": "rapid7/base"`

Lints ES6+ but does not lint React.

### eslint-config-rapid7/legacy

Config value: `"extends": "rapid7/legacy"`

Lints ES5 and below.

### eslint-config-rapid7/browser

Config value: `"extends": "rapid7/browser"`

Lints all that the default setting does, and adds browser-specific rules.

### eslint-config-rapid7/node

Config value: `"extends": "rapid7/node"`

Lints all that the default setting does, and adds node-specific rules.

See [Rapid7's Javascript styleguide](https://github.com/rapid7/javascript-style-guide) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

We welcome all PRs! We do have a gap specifically in the area of node-specific rules, so please contribute!
