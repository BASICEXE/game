const mix = require('laravel-mix');

mix.copyDirectory('src/img', 'dist/img')
  .js('src/js/app.js', 'dist/js/')
  .sourceMaps(true, 'inline-source-map')
  .sass('src/css/app.scss', 'dist/css/')
  .browserSync({
    files: 'dist/**/*',
    server: 'dist',
    proxy: false
  });
