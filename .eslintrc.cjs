import path from 'path';

export default {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: path.resolve('./tsconfig.eslint.json'),
    tsconfigRootDir: path.resolve('.'),
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // Add your custom rules here
  },
};
