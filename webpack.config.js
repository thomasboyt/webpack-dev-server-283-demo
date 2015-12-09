module.exports = {
  entry: {
    app: './app/main.js',
  },

  output: {
    path: 'public/',
    filename: '[name].bundle.js'
  },

  devServer: {
    contentBase: 'public/',

    proxy: {
      '/websocket': {
        target: 'ws://127.0.0.1:8081',
        secure: false,
        ws: true,
      },
    },
  },
};
