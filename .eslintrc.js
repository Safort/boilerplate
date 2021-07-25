module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier'],
  plugins: ['react'],
  env: {
    browser: true,
    node: true,
    jest: true,
    es2020: true,
  },
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    typescript: true,
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      classes: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  rules: {
    treatUndefinedAsUnspecified: 0,
    'consistent-return': 0,
    'no-else-return': 0,
    'no-underscore-dangle': 0,
    'no-shadow': 0,
    'react/prop-types': 0,
    'arrow-parens': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/extensions': 'off',
    'no-console': 1,
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
  },
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'error',
      },
    },
  ],
};
