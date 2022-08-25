module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    'global-require': 0,
    'no-underscore-dangle': 0,
    'prefer-const':0,
    indent: ['off', 2],
    args: 0,
  },
};
