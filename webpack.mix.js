const mix = require('laravel-mix');

mix.js('src/js/app.js', 'dist/js/')
  .sourceMaps(true, 'inline-source-map');
  // .sass('src/sass/app.scss', 'public/css/');
