module.exports = {
  extends: "airbnb",
  rules: {
    "no-console": "off",
    "no-unused-vars": 0,
    "max-len": 0,
    "comma-dangle": 0,
    "no-undef": 0,
    "no-trailing-spaces": 0,
    "arrow-parens": 0,
    "arrow-body-style": 0,
    "class-methods-use-this": 0,
    "import/no-extraneous-dependencies": 0,
    "no-underscore-dangle": 0,
    "jsx-a11y/label-has-for": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-max-props-per-line": 0,
    "react/jsx-filename-extension": 0,
    "react/sort-comp": 0,
    "react/jsx-wrap-multilines": 0,
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ]
    }]
  }
};
