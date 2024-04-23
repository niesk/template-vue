/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
        'cypress/support/**/*.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['import'],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling'],
          'index',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: '../**',
            group: 'parent',
            position: 'after',
          },
          {
            pattern: './*.scss',
            group: 'sibling',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        // alphabetize: {
        //   order: 'asc',
        //   caseInsensitive: true,
        // },
      },
    ]
  }
}
