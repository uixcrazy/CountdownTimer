module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: [
    "react",
    "react-hooks",
    "react-native",
    "@typescript-eslint",
    "jsdoc",
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react/require-default-props": "off",
    "react/jsx-filename-extension": "off",
    "react-hooks/exhaustive-deps": "warn",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-underscore-dangle": ["warn", { allow: ["_wrapperClass", "_contentClass"] }],
    "template-curly-spacing": ["warn", "never"],
    indent: ["warn", 2, { ignoredNodes: ["TemplateLiteral"] }],
    quotes: ["warn", "double", { avoidEscape: true, allowTemplateLiterals: false }],
    "no-unused-vars": "warn",
    "import/no-useless-path-segments": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-anonymous-default-export": ["error", {
      allowArray: true,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowCallExpression: true, // The true value here is for backward compatibility
      allowLiteral: false,
      allowObject: true,
    }],
    "max-len": [1, 120, 2, {
      ignoreUrls: true,
      ignoreComments: false,
    }],
    "object-curly-newline": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "import/extensions": ["error", "ignorePackages", {
      js: "never",
      jsx: "never",
      ts: "never",
      tsx: "never",
    }],
    "jsx-a11y/anchor-is-valid": ["error", {
      components: ["Link"],
      specialLink: ["hrefLeft", "hrefRight"],
      aspects: ["invalidHref", "preferButton"],
    }],
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/ban-types": [
      "warn",
      {
        types: {
          Object: {
            message: "Avoid using the `Object` type. Did you mean `object`?",
          },
          Function: {
            message: "Avoid using the `Function` type. Prefer a specific function type, like `() => void`.",
          },
          Boolean: {
            message: "Avoid using the `Boolean` type. Did you mean `boolean`?",
          },
          Number: {
            message: "Avoid using the `Number` type. Did you mean `number`?",
          },
          String: {
            message: "Avoid using the `String` type. Did you mean `string`?",
          },
          Symbol: {
            message: "Avoid using the `Symbol` type. Did you mean `symbol`?",
          },
        },
      },
    ],
  },
};
