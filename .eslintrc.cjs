module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true,
  },
  extends: ["eslint:recommended", "plugin:astro/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  overrides: [
    {
      files: ["*.astro", "*.ts"],
      rules: {
        "no-console": "warn",
        "no-unused-vars": "warn",
        "no-var": "error",
        "no-alert": "error",
        "no-use-before-define": "error",
        "func-names": "error",
        "no-shadow": "error",
        "id-length": ["error", { min: 3 }],
      },
    },
  ],
};
