module.exports = {
  stories: [
    '../src/ui-kit/**/*.stories.mdx',
    '../src/ui-kit/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
}
