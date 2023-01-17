module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended','plugin:@typescript-eslint/recommended-requiring-type-checking','prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint','prettier'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  root: true,
  rules: {
    'max-len': ['error', {code: 60}]
  }
};