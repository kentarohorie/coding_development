const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src', 'pages', 'sample_page.hbs'),
    filename: 'pages/sample_page.html'
  })
]

module.exports = {
  plugins,
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    assetModuleFilename: 'images/[name][ext]'
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        type: 'asset/resource',
        use: [
          'image-webpack-loader'
        ]
      },
      {
        test: /\.hbs$/i,
        loader: 'handlebars-loader',
        options: {
          inlineRequires: '/images/'
        }
      }
    ]
  },
  devServer: {
    client: {
      logging: 'log',
      progress: true,
      overlay: {
        errors: true,
        warnings: false
      }
    },
    host: 'localhost',
    port: 3001,
    open: true,
    watchFiles: ['src/**/*'],
    static: {
      directory: path.join(__dirname, 'dist')
    }
  }
}
