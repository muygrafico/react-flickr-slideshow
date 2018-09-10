module.exports = {
    "extends": ["standard", "standard-react"],
    "rules": {
        "indent" : ["error", 4, { "ignoredNodes": ["JSXElement *"] }],
        "react/jsx-indent" : ["error", 2]
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