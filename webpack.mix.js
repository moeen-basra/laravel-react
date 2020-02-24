const mix = require('laravel-mix')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


const RemovePlugin = require('remove-files-webpack-plugin');

const removePlugin =  new RemovePlugin({

  before: {
    test: [
      {
        folder: 'public',
        method: (filePath) => {
          return new RegExp(/(?:.*\.app\.js|mix-manifest\.json)$/, 'm').test(filePath);
        }
      },
      {
        folder: 'public/js',
        method: (filePath) => {
          return new RegExp(/app\.js$/, 'm').test(filePath);
        }
      },
      {
        folder: 'public/css',
        method: (filePath) => {
          return new RegExp(/app\.css$/, 'm').test(filePath);
        }
      }
    ]
  },

  after: {

  }
})


mix.webpackConfig({

  plugins: [removePlugin],

  node: {
    fs: 'empty'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash]' + String(new Date().getTime()) +'.app.js'
  }
}).react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .version();