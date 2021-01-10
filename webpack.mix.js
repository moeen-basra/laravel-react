const mix = require('laravel-mix');

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
  plugins: [removePlugin, new ESLintPlugin()],
});

mix.js('resources/js/app.js', 'public/js').react()
  .extract(['@popperjs/core', 'axios', 'bootstrap', 'clsx', 'font-awesome', 'history', 'jquery', 'lodash', 'moment', 'prop-types', 'react', 'react-document-title', 'react-dom', 'react-loadable', 'react-redux', 'react-router-dom', 'reactstrap', 'redux', 'redux-thunk', 'ree-validate'])
  .sass('resources/sass/app.scss', 'public/css')
  .sourceMaps(false, 'source-map')

if (mix.inProduction()) {
  mix.version();
}

if (!mix.inProduction()) {
  mix.browserSync('http://localhost:8100')
}
