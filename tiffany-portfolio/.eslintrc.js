module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  rules: {
    '@typescript-eslint/no-unsafe-return': off,
    '@typescript-eslint/no-unsafe-call':off,
    '@typescript-eslint/no-unsafe-member-access':off,
    '@typescript-eslint/no-unsafe-assignment':off
  },
  root: true,
};