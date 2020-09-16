module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true
  },
  plugins: ['prettier', '@typescript-eslint', 'react-hooks'],
  extends: [
    'prettier',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint',
    'airbnb-typescript'
  ],
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'comma-dangle': 0,
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        tabWidth: 2,
        singleQuote: true,
        semi: true,
        trailingComma: 'none',
        bracketSpacing: true,
        endOfLine: 'auto',
        arrowParens: 'avoid'
      }
    ],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true }
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      { allowTypedFunctionExpressions: true }
    ],
    '@typescript-eslint/array-type': 'error',
    'no-useless-escape': 0,
    'no-console': 'error',
    'prefer-promise-reject-errors': 0,
    'generator-star-spacing': 'off',
    'promise/param-names': 0,
    'no-template-curly-in-string': 0,
    'no-return-await': 0,
    'default-case': 'error',
    'lines-between-class-members': 0,
    'no-script-url': 0,
    'no-eval': 0,
    'react/prop-types': 0,
    'no-empty': 0,
    'react/no-unescaped-entities': 0,
    'prefer-rest-params': 0,
    '@typescript-eslint/class-name-casing': 0,
    '@typescript-eslint/no-empty-function': 0,
    'no-irregular-whitespace': 0,
    'no-unescaped-entities': 0,
    'react/display-name': 0,
    'react/static-property-placement': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    'guard-for-in': 0,
    'func-names': 0,
    'no-multi-assign': 0,
    'arrow-parens': 0,
    'no-restricted-globals': 0,
    'react/sort-comp': 0,
    'no-param-reassign': 0,
    'import/prefer-default-export': 0,
    'global-require': 0,
    'import/no-dynamic-require': 0,
    'prefer-object-spread': 0,
    'no-restricted-syntax': 0,
    'prefer-destructuring': 0,
    'no-return-assign': 0,
    'import/order': 'error',
    'import/no-cycle': 'error',
    '@typescript-eslint/lines-between-class-members': 'error',
    eqeqeq: ['error', 'smart'],
    'react/destructuring-assignment': 0,
    'react/no-array-index-key': 0,
    'linebreak-style': 0,
    '@typescript-eslint/indent': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'operator-linebreak': 0,
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'no-nested-ternary': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'no-plusplus': 0,
    'no-await-in-loop': 0,
    'no-underscore-dangle': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-access-state-in-setstate': 0,
    'react/jsx-indent': 0,
    'react/jsx-fragments': 0,
    'react/jsx-curly-newline': 0,
    'react/no-danger': 0,
    'import/no-extraneous-dependencies': 0,
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'error', // 检查 effect 的依赖
    // TODO:: 后面放开
    'react/button-has-type': 0,
    'no-confusing-arrow': 0,
    'no-shadow': 0,
    'react/prefer-stateless-function': 0,
    'unicode-bom': 0,
    '@typescript-eslint/naming-convention': 0
  }
};
