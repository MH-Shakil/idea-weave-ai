import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import prettierPlugin from 'eslint-plugin-prettier'

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            ecmaVersion: 2021,
            sourceType: 'module',
        },
        settings: {
            react: {
                version: 'detect',
            },
            'import/resolver': {
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
                typescript: {},
            },
        },
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooks,
            '@typescript-eslint': typescriptEslint,
            import: importPlugin,
            'jsx-a11y': jsxA11y,
            prettier: prettierPlugin,
        },
        rules: {
            'prettier/prettier': [
                'error',
                {
                    /* Prettier config */
                },
            ],
            'import/extensions': [
                'error',
                {
                    /* Extensions config */
                },
            ],
            'no-use-before-define': 'off',
            '@typescript-eslint/no-use-before-define': 'error',
            'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
            'no-shadow': 'off',
            '@typescript-eslint/no-shadow': ['error'],
            // '@typescript-eslint/explicit-function-return-type': [
            //     'error',
            //     {
            //         allowExpressions: false,
            //         allowTypedFunctionExpressions: false,
            //         allowHigherOrderFunctions: false,
            //     },
            // ],
            '@typescript-eslint/no-unused-vars': ['warn'], // Check for unused vars and props
            'max-len': 'off',
            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'import/prefer-default-export': 'off',
            'react/prop-types': 'off',
        },
    },
]
