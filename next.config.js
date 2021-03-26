const withTM = require('next-transpile-modules')(['@babylonjs/core', '@babylonjs/gui', '@babylonjs/loaders', 'react-babylonjs']); // As per comment.

module.exports = withTM();
