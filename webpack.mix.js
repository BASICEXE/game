const mix = require('laravel-mix');

mix.copyDirectory('src/img', 'dist/img')
  .copyDirectory('src/bgm', 'dist/bgm')
  .copy('src/index.html', 'dist/index.html')
  .copy('src/images/**/**', 'dist/')
  .js('src/js/app.js', 'dist/js/')
  .sourceMaps(true, 'inline-source-map')
  .sass('src/css/app.scss', 'dist/css/')
  .browserSync({
    files: 'dist/**/*',
    server: 'dist',
    proxy: false
  });
