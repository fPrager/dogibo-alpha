const path = require('path');

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // scss in storybook requires fixed versions:
    // css-loader@5.2.6 sass-loader@10.1.1 style-loader@2.0.0
    // see: https://github.com/storybookjs/presets/issues/195#issuecomment-911408796
    "@storybook/preset-scss"
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: false,
  },
  webpackFinal: async (config, { configType }) => {
    // fixed root asset paths in scss files
    // see: https://github.com/storybookjs/storybook/issues/12844#issuecomment-867544160
    config.resolve.roots = [
      path.resolve(__dirname, '../public'),
      'node_modules',
    ];
    return config;
  },
}