module.exports = {
  // parser: 'babel-eslint',
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    sourceType: 'module',
    requireConfigFile: false,
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off', // Desativar a regra de proibição do uso de console (opcional)
    'import/no-commonjs': 'off', // Desativar a regra de importação com require
    'react/no-unescaped-entities': 'off', // Desativar a regra de escape de entidades
  },
}
