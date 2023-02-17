const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */



let assetDir = 'assets';
mix.options({
    fileLoaderDirs: {
        fonts: `${assetDir}/fonts`
    }
});


mix.sass('resources/sass/website/app.scss','public/assets/css/website')
    .sass('resources/sass/panel/app.scss','public/assets/css/panel')
    .sass('resources/sass/panel/style-ltr.scss','public/assets/css/panel')

mix.js('resources/js/panel/alerts.js','public/assets/js/panel')
    .js('resources/js/panel/app.js','public/assets/js/panel')



