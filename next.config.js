const withTM = require('next-transpile-modules')(
    ['@babylonjs/core', '@babylonjs/gui', '@babylonjs/loaders', 'react-babylonjs'
]);

module.exports = {
    ...withTM(),
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
}
