import eslintPluginAstro from 'eslint-plugin-astro'

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
      'astro/no-conflict-set-directives': 'error',
      'astro/no-unused-define-vars-in-style': 'error',
      'astro/prefer-class-list-directive': 'error',
      'astro/prefer-split-class-list': 'error',
      'astro/prefer-object-class-list': 'error',
      'prefer-const': 'error',
      'no-console': 'error',
      'no-label-var': 'error',
      'no-multi-str': 'error',
      'no-negated-condition': 'error',
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': 'error',
      'no-var': 'error'
    }
  }
]
