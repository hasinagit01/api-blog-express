import js from '@eslint/js'
import prettier from 'eslint-config-prettier'

export default [
    {
        ignores: [
            'node_modules/',
            'generated/',
            '.prisma/',
            'prisma/',
            'dist/',
            'build/',
            '*.config.js',
            '*.config.cjs',
        ],
    },
    js.configs.recommended,
    prettier,
    {
        files: ['**/*.js'],
        languageOptions: {
            globals: {
                console: 'readonly',
                process: 'readonly',
            },
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        rules: {
            indent: ['error', 4],
            //quotes: ['error', 'single'],
            semi: ['error', 'never'],
        },
    },

    {
        rules: {
            'no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                },
            ],
        },
    },
]
