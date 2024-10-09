module.exports = {
  extends: [
    'airbnb',
    '@mimica/eslint-config-typescript',
    'prettier', // should be last
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    ecmaFeatures: {
      jsx: true,
    },
    jsxPragma: null,
  },
  env: {
    browser: true,
    jasmine: true,
  },
  settings: {
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    // Append 'ts' extensions to Airbnb 'import/extensions' setting
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.mjs'],
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    camelcase: [
      'warn',
      {
        allow: ['^formatDate(_[a-zA-Z]+)+$'],
      },
    ],
    curly: [2, 'all'], // disabled by eslint-config-prettier
    'function-paren-newline': 'off',
    'generator-star-spacing': 0,
    'global-require': 0,
    'import/consistent-type-specifier-style': [2, 'prefer-inline'],
    'import/dynamic-import-chunkname': [
      2,
      {
        webpackChunknameFormat: '([a-z0-9-/]|\\[request\\])+',
      },
    ],
    'import/no-duplicates': 'warn',
    'import/no-empty-named-blocks': 2,
    'import/order': [
      2,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: './*.module.{css,scss,postcss}',
            group: 'sibling',
            position: 'after',
          },
        ],
        distinctGroup: false,
        pathGroupsExcludedImportTypes: ['react'],
        warnOnUnassignedImports: true,
      },
    ],
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': 'warn',
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'no-console': [
      2,
      {
        allow: ['error', 'warn'],
      },
    ],
    'no-nested-ternary': 0,
    'prefer-destructuring': [
      2,
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],
    // Only for ordering members
    'sort-imports': [
      2,
      {
        ignoreDeclarationSort: true,
      },
    ],
    'react/default-props-match-prop-types': 0, // TODO: enable this and fix errors
    'react/destructuring-assignment': [
      2,
      'always',
      {
        destructureInSignature: 'always',
      },
    ],
    'react/forbid-dom-props': [
      2,
      {
        forbid: ['id'],
      },
    ],
    'react/forbid-prop-types': 'warn',
    'react/function-component-definition': 0,
    'react/hook-use-state': 2,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'react/jsx-curly-newline': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-no-bind': [
      2,
      {
        ignoreDOMComponents: true,
      },
    ],
    'react/jsx-one-expression-per-line': 0,
    'react/no-array-index-key': 0,
    'react/no-did-update-set-state': 'warn',
    'react/no-find-dom-node': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/jsx-props-no-spreading': 0,
    'react/jsx-uses-react': 0,
    'react/jsx-wrap-multilines': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'react/jsx-sort-props': [
      2,
      {
        noSortAlphabetically: true,
        reservedFirst: true,
        callbacksLast: true,
      },
    ],
    'react/state-in-constructor': 0,

    'unicorn/prefer-global-this': 0,

    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/restrict-plus-operands': 0,
      },
    },
    {
      files: ['*.jsx', '*.tsx'],
      rules: {
        'import/prefer-default-export': [
          2,
          {
            target: 'any',
          },
        ],
      },
    },
  ],
};
