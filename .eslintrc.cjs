module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'prettier',
        '@nuxt/eslint-config',
    ],
    rules: {
        quotes: ['error', 'single', { avoidEscape: true }],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                caughtErrorsIgnorePattern: '^_',
            },
        ],
        'vue/no-v-html': ['off'],
        'vue/max-attributes-per-line': ['off'],
        'vue/singleline-html-element-content-newline': ['off'],
        'vue/html-self-closing': ['off'],
        'vue/multi-word-component-names': ['off'],
        '@typescript-eslint/ban-ts-comment': ['off'],
    },
}
