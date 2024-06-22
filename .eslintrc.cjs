module.exports = {
  root: true,
  env: { browser: true},
  extends: [
    "airbnb",
    "airbnb/hooks",
    "eslint:recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
};
