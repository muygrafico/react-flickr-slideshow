module.exports = {
    "extends": ["standard","standard-react"],
    "rules": {
      "indent" : 0,
      "react/jsx-indent" : ["error", 4]

    },
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module",
      "module": "commonjs"
    },
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true
    }
};
