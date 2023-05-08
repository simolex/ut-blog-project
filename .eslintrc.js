module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended', 'prettier'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'simolex-plugin-lint',
        'unused-imports',
    ],
    rules: {
        // indent: [2, 4, { SwitchCase: 1 }],
        // 'react/jsx-indent': [2, 4],
        // 'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'object-curly-newline': [2, { consistent: true }],
        'linebreak-style': [0],
        'operator-linebreak': [0],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': [1, { argsIgnorePattern: '^_' }],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'max-len': [2, { code: 120, ignoreComments: true }],
        'i18next/no-literal-string': [
            2,
            {
                markupOnly: true,
                ignoreAttribute: [
                    'direction',
                    'justify',
                    'align',
                    'gap',
                    'to',
                    'data-testid',
                    'Svg',
                    'target',
                    'as',
                    'role',
                    'border',
                ],
            },
        ],
        'implicit-arrow-linebreak': [1],
        'no-redeclare': [1],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error', // Проверяем правила хуков
        'react-hooks/exhaustive-deps': 'error', // Проверяем зависимости эффекта
        'no-param-reassign': 'off', // for Redux
        'no-undef': 'off',
        'react/no-array-index-key': 'off',
        'no-confusing-arrow': 'warn',
        'function-paren-newline': 'off',
        'unused-imports/no-unused-imports': 'error',
        'simolex-plugin-lint/path-checker': ['error', { alias: '@' }],
        'simolex-plugin-lint/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: ['**/*.test.*', '**/*.story.*', '**/StoreDecorator.tsx'],
            },
        ],
        'simolex-plugin-lint/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing', '**/styles/index.scss'],
            },
        ],
        'react/no-unstable-nested-components': 'warn',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    overrides: [
        {
            files: ['./src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};
