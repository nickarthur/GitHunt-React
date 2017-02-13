module.exports = [
  {
    name: 'browser',
    entry: './ui/client.js',
    output: {
      filename: "bundle.js",
      publicPath: '/'
    },
    module: {
      loaders: [{
        test: /\.css/,
        loader: 'style!css'
      }, {
        // https://github.com/apollographql/persistgraphql/issues/4
        test: /node_modules\/apollo-client\/transport\/networkInterface\.js$/,
        loader: 'babel'
      }, {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules)/
      }, {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      }]
    },
    devServer: {
    },
    devtool: "eval-source-map",
  },
  {
    name: 'SSR server',
    entry: './ui/server.js',
    target: 'node',
    output: {
      filename: 'server_bundle.js',
      publicPath: '/',
    },
    libraryTarget: 'commonjs32',
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /(node_modules)/
        },
        {
          // https://github.com/apollographql/persistgraphql/issues/4
          test: /node_modules\/apollo-client\/transport\/networkInterface\.js$/,
          loader: 'babel'
        },
        {
          test: /\.json$/,
          loader: 'json'
        },
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader'
        }
      ]
    }
  }
]
