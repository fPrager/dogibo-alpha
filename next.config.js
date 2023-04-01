const withTM = require('next-transpile-modules')(
    ['@babylonjs/core', '@babylonjs/gui', '@babylonjs/loaders', 'react-babylonjs'
]);

module.exports = {
    ...withTM(),
    webpack: (config) => {
        config.module.rules.push({
          test: /\.md$/,
          use: 'raw-loader',
        });
        return config;
      },
}
