module.exports = {
  extends: ['next', 'turbo', 'prettier', 'standard'],
  rules: {
    'no-use-before-define': 'off',
    '@next/next/no-html-link-for-pages': 'off'
  }
}
