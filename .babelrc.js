module.exports = api => {
  const isTest = api.env('test');
  api.cache(true);
  return {
    "presets": [
      "@babel/preset-env",
      [
        "@babel/preset-react",
        {"runtime": "automatic"},
      ],
      "@babel/preset-typescript",
    ],
    "plugins": [
      [
        "@babel/plugin-transform-runtime",
        {"regenerator": true},
      ],
    ],
  }
}