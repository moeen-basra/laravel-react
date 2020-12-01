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
const ESLintPlugin = require('eslint-webpack-plugin');

const removePlugin = new RemovePlugin({

  before: {
    test: [
      {
        folder: 'public',
        method: (filePath) => {
          return new RegExp(/(?:.*\.js|.*\.map|mix-manifest\.json)$/, 'm').test(filePath);
        }
      },
      {
        folder: 'public/js',
        method: (filePath) => {
          return new RegExp(/(?:.*\.js|.*\.map)$/, 'm').test(filePath);
        },
        recursive: true
      },
      {
        folder: 'public/css',
        method: (filePath) => {
          return new RegExp(/(?:.*\.css|.*\.map)$/, 'm').test(filePath);
        }
      }
    ]
  },

  after: {}
})

mix.webpackConfig({
  plugins: [ removePlugin, new ESLintPlugin() ],

  node: {
    fs: 'empty'
  },
});
  mix.react('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps(false, 'source-map')
    .version();
