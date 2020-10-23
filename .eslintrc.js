module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['standard'],
  globals: {
    describe: true,
    it: true
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    quotes: ['error', 'single'],
    'space-before-function-paren': ['error', 'never']
  }
}
