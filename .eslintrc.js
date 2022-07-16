module.exports = {
    env: {
      browser: true,
      commonjs: true,
      es6: true
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
      ecmaVersion: 2020
    },
    rules: {
      allowEmptyReject: 0,
      'no-return-assign': 0,
      'node/no-deprecated-api': 0,
      'no-useless-escape': 0,
      'no-undef': 0,
      'no-unused-expressions': 0
    }
  }
  