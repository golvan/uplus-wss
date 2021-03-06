module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'operator-linebreak': 'off',
    'prefer-destructuring': 'off',
    'guard-for-in': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'max-len': ['error', { code: 160 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': 'off',
    'no-param-reassign': [2, {
      props: false,
    }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
