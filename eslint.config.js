import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import globals from 'globals';

export default [
  {
    ignores: ['dist'], // Ignorer les fichiers générés
  },
  {
    files: ['**/*.{ts,tsx}'], // Cible tous les fichiers TypeScript et TSX
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser, // Charge les globales du navigateur
    },
    plugins: {
      react: react,
      'react-hooks': reactHooks,
      prettier: prettier,
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...typescriptEslint.configs.recommended.rules,
      'prettier/prettier': ['error'], // Intégration stricte avec Prettier
      '@typescript-eslint/no-unused-vars': ['warn'], // Avertir sur les variables inutilisées
      'no-console': 'warn', // Réduit les logs excessifs
      'react/react-in-jsx-scope': 'off', // Désactiver pour React 17+
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'error',
      'react-hooks/exhaustive-deps': 'warn', // Bonne gestion des dépendances useEffect
    },
    settings: {
      react: {
        version: 'detect', // Auto-détecte la version de React
      },
    },
  },
];
