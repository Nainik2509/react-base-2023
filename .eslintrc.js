/**
 * This file is part of [Shift Group Project]
 *
 * (c) 2021 [Nainik Mehta] <[nainik@york.ie]>
 *
 * --------------------------------------------------
 *
 * @module app.v1.shiftGroup
 * @description Eslint Configuration
 * @author [Nainik Mehta] <[nainikmehta25@gmail.com]>
 * @version 1.0.0
 *
 * --------------------------------------------------
 */

module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    // "plugin:@typescript-eslint/recommended",
    'plugin:import/errors',
    'plugin:import/warnings',
    // "plugin:import/typescript",
    'plugin:jsx-a11y/recommended',
    // "plugin:eslint-comments/recommended",
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-unused-vars': 'warn',
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/no-autofocus': [
      2,
      {
        ignoreNonDOM: true,
      },
    ],
  },
}
