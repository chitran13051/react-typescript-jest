module.exports = function override(config, env) {
  config.module.rules[1].oneOf.push({
    test: /\.(de|es|fr)\.(json|ya?ml)$/,
    type: 'javascript/auto',
    loader: '@messageformat/loader',
    options: { locale: ['de', 'fr', 'es'] },
  });
  return config;
}