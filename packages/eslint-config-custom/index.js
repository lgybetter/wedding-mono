module.exports = {
  extends: ['next', 'turbo', 'prettier', 'standard'],
  rules: {
    camelcase: 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    '@next/next/no-html-link-for-pages': 'off'
  }
}
