/*=============================================
=            Gulp Starter by @dope            =
=============================================*/

/**
*
* The packages we are using
* Not using gulp-load-plugins as it is nice to see whats here.
*
**/
var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var browserSync  = require('browser-sync');
var prefix       = require('gulp-autoprefixer');
var plumber      = require('gulp-plumber');
var uglify       = require('gulp-uglify');
var rename       = require("gulp-rename");
var imagemin     = require("gulp-imagemin");
var pngquant     = require('imagemin-pngquant');

/**
*
* Styles
* - Compile
* - Compress/Minify
* - Catch errors (gulp-plumber)
* - Autoprefixer
*
**/
gulp.task('sass', function() {
  return sass('client/styles/styles.sass', { style: 'compressed' })
  .on('error', function (err) {
    console.error('Error!', err.message);
  })
  .pipe(prefix('last 2 versions', '> 1%', 'ie 8', 'Android 2', 'Firefox ESR'))
  .pipe(plumber())
  .pipe(gulp.dest('client/styles'));
});


/**
*
* BrowserSync.io
* - Watch CSS, JS & HTML for changes
* - View project at: localhost:3000
*
**/
gulp.task('browser-sync', function() {
  browserSync.init(['client/styles/*.css', 'client/scripts/*.js', 'index.html'], {
    server: {
      baseDir: './'
    }
  });
});


/**
*
* Javascript
* - Uglify
*
**/
gulp.task('scripts', function() {
  gulp.src('client/scripts/*.js')
  .pipe(uglify())
  .pipe(rename({
    dirname: "../min",
    suffix: ".min",
  }))
  .pipe(gulp.dest('client/min'))
});

gulp.task('viewscripts', function() {
  gulp.src('client/views/**/*.js')
  .pipe(uglify())
  .pipe(rename({
    dirname: "../min",
    suffix: ".min",
  }))
  .pipe(gulp.dest('client/min'))
});


/**
*
* Images
* - Compress them!
*
**/
gulp.task('images', function () {
  return gulp.src('client/img/*')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest('client/img'));
});


/**
*
* Default task
* - Runs sass, browser-sync, scripts and image tasks
* - Watchs for file changes for images, scripts and sass/css
*
**/
gulp.task('default', ['sass', 'browser-sync', 'scripts', 'viewscripts', 'images'], function () {
  gulp.watch('client/styles//*.sass', ['sass']);
  gulp.watch('client/scripts/*.js', ['scripts']);
  gulp.watch('client/views/**/*.js', ['viewscripts']);
  gulp.watch('client/img/*', ['images']);
});