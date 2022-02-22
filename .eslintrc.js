module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  env: {
    'browser': true,
    'es6': true,
    'node': true,
  },

  extends: [
    'plugin:vue/recommended',
    'plugin:vue/essential',
    'eslint:recommended',
  ],
  plugins: ['vue'],
  rules: {
    'indent': ['error', 2, { 'ignoredNodes': ['TemplateLiteral'] }],
    'template-curly-spacing' : 'off',
    'quotes': ['warn', 'single'],
    'semi': ['warn', 'never'],
    'comma-dangle': ['warn', 'always-multiline'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}
