const mix = require('laravel-mix');

mix.copyDirectory('src/img', 'dist/img')
  .js('src/js/app.js', 'dist/js/')
  .sourceMaps(true, 'inline-source-map')
  .browserSync({
    files: 'dist/**/*',
    server: 'dist',
    proxy: false
  });
  // .sass('src/sass/app.scss', 'public/css/');
