module.exports = {
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource', // This tells Webpack to handle image files as resources
        },
      ],
    },
  };
  