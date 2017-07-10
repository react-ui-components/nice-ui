const path = require('path')

module.exports = {
  extends: '../.eslintrc',
  rules: {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              'nice-ui': path.resolve(__dirname, '../src'),
            },
          },
        },
      },
    },
  },
};
