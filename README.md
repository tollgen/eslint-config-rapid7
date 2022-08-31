# eslint-config-rapid7

Apply as many of the conventions called out in [Rapid7's Javascript styleguide](https://github.com/rapid7/javascript-style-guide) as possible via an extensible shared ESLint config.

## Installation

Install [ESLint](https://www.github.com/eslint/eslint) as well as the config.

```sh
npm i -D eslint
```

## Usage

Update your `.eslintrc` to extend the configs you want to apply.

```json
{
  "extends": ["rapid7/browser", "rapid7/react"]
}
```

If you want to override/modify specific rules, you can do so in your `rules` section.

```json
{
  "extends": ["rapid7/browser", "rapid7/strict"],
  "rules": {
    "no-magic-numbers": 0
  }
}
```

## Configs

|Config name|Description|
|-----------|-----------|
|`rapid7`|Base config, lints standard javascript for all environments|
|`rapid7/strict`|Provides additional rules and overrides of certain base rules for a more strict linting of standard javascript for all environments|
|`rapid7/browser`|Lints javascript specific to implementations in a browser environment (includes `rapid7` in rules)|
|`rapid7/node`|Lints javascript specific to implementations in a NodeJS environment (includes `rapid7` in rules)|
|`rapid7/react`|Lints javascript specific to use with ReactJS|

See [Rapid7's Javascript styleguide](https://github.com/rapid7/javascript-style-guide) and
the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.
