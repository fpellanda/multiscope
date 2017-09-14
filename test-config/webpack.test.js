var webpack = require('webpack');
var path = require('path');
var rootPath = path.resolve(__dirname, '..');

module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.js'],
    modules: [path.resolve(rootPath, 'node_modules')],
    alias: {
      'api': path.resolve(rootPath, 'api/server')
    }
  },

  externals: [
    resolveExternals
  ],

  module: {
    rules: [{
        test: /\.ts$/,
        loaders: [{
          loader: 'ts-loader'
        }, 'angular2-template-loader']
      },
      {
        test: /.+\.ts$/,
        exclude: /(index.ts|mocks.ts|\.spec\.ts$)/,
        loader: 'istanbul-instrumenter-loader',
        enforce: 'post',
        query: {
          esModules: true
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader?attrs=false'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null-loader'
      }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /(ionic-angular)|(angular(\\|\/)core(\\|\/)@angular)/,
      root('./src'), // location of your src
      {} // a map of your routes
    )
  ]
};

function root(localPath) {
  return path.resolve(rootPath, localPath);
}

function resolveExternals(context, request, callback) {
  return resolveMeteor(request, callback) ||
    callback();
}
 
function resolveMeteor(request, callback) {
  var match = request.match(/^meteor\/(.+)$/);
  var pack = match && match[1];
 
  if (pack) {
    callback(null, 'Package["' + pack + '"]');
    return true;
  }
}
