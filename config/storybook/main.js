module.exports = {
  'stories': ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  'addons': ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/preset-scss', 'storybook-addon-mock'],
  'framework': {
    name: '@storybook/react-webpack5',
    options: {
      builder: {
        fsCache: true
      }
    }
  },
  staticDirs: ['../../public'],
  docs: {
    autodocs: true
  }
};