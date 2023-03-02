module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
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
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
    rules: {
        indent: [2, 4, { SwitchCase: 1 }],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'object-curly-newline': [2, { consistent: true }],
        'linebreak-style': [0],
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
        'max-len': [2, { code: 100, ignoreComments: true }],
        'i18next/no-literal-string': [
            2,
            { markupOnly: true, ignoreAttribute: ['to', 'data-testid'] },
        ],
        'implicit-arrow-linebreak': [1],
        'no-redeclare': [1],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react-hooks/rules-of-hooks': 'error', // Проверяем правила хуков
        'react-hooks/exhaustive-deps': 'error', // Проверяем зависимости эффекта
        'no-param-reassign': 'off', // for Redux
    },
    globals: {
        __IS_DEV__: true,
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
