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
    plugins: ['react', '@typescript-eslint', 'i18next'],
    rules: {
        indent: [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'object-curly-newline': [2, { consistent: true }],
        'linebreak-style': [2, 'unix'],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
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
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['./src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
};
