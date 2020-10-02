const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#5899E2',
              '@layout-body-background': '#EFEFF0',
              '@layout-header-background': '#5899E2',
              '@body-background': '#EFEFF0',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};