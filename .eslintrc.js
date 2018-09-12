module.exports = {
    "extends": ["standard","standard-react"],
    "rules": {
      "indent" : 0,
      "react/jsx-indent" : ["error", 4]

    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "module": "commonjs",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true
    }
};
