const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@component-background": "#FF0000",
              "@text-color": "white",
              "@primary-5": "white",
              "@primary-color": "#000000",
              "@heading-color": "#000000",
              "@layout-header-background": "#FF0000", //header background
              "@menu-item-active-bg": "#000000", //menu top color
              "@menu-dark-item-active-bg": "#000000", //menu top color
              "@link-color": "#000000", //green color for text
              "@timeline-dot-bg": "transparent",
              //table
              "@table-bg": "#FF0000",
              "@table-header-bg": "#FF0000",
              "@table-header-color": "#000000",
              "@table-row-hover-bg": "#000000",
              //table pagination
              "@pagination-item-bg": "#FF0000",
              "@pagination-item-bg-active": "#000000",
              "@pagination-item-input-bg": "#FF0000",
              //button
              "@btn-link-hover-bg": "#FF0000",
              //icons
              "@icon-color-hover": "#FF0000",
              "@icon-color": "white",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
