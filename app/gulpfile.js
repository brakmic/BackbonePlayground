'use strict'

var gulp = require('gulp');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var templatizer = require('templatizer'); //taken from moonBoots config
var server = require('./server'); //export from server.js to start HAPI server
var stream;

var environment = 'dev';
var paths = {
  src: './',
  scripts: './scripts/',
  dest: './',
  vendor: './scripts/vendor/',
  assets: './public/',
  css: './public/css/',
  test: '../test/',
  configs: './configs/',
  templates: './templates/'
}

gulp.task('set-production', function() {
  environment = 'production';
});
//default styles
gulp.task('css-styles', function() {
  stream = gulp.src([
      paths.css + 'bootstrap.dist.css',
      paths.css + 'font-awesome.min.css',
      paths.css + 'custom.css',
      paths.css + 'app.css'
    ])
    .pipe(plumber())
    .pipe(concat("styles.css"))

  if (environment == 'production') {
    stream.pipe(minify())
  }

  stream.pipe(gulp.dest(paths.dest + 'public/css/'))
});
//all needed libs
gulp.task('vendor-scripts', function() {
  stream = gulp.src([
      paths.vendor + 'jquery-2.1.1.js',
      paths.vendor + 'underscore.js',
      paths.vendor + 'underscore.string.js',
      paths.vendor + 'bootstrap.js',
      paths.vendor + 'backbone.js',
      paths.vendor + 'backbone.stickit.js',
      paths.vendor + 'backbone.wreqr.js',
      paths.vendor + 'backbone.babysitter.js',
      paths.vendor + 'backbone.marionette.js',
      paths.vendor + 'backbone.radio.js',
      paths.vendor + 'radio.shim.js'
    ])
    .pipe(plumber())
    .pipe(concat("vendor.js"))

  if (environment == 'production') {
    stream.pipe(uglify())
  }

  stream.pipe(gulp.dest(paths.scripts))
});
//starting point for browserify
gulp.task('scripts', function() {
  stream = gulp.src(
      paths.src + 'app.js')
    .pipe(browserify({
      insertGlobals : true,
      debug: environment === 'development'
    }))
    .pipe(concat('main.js'))
  if (environment == 'production') {
    stream.pipe(uglify())
  }
  stream.pipe(gulp.dest(paths.scripts))
});
//jade templates (we use templatizer from AmpersandJS project
// to generate JS-templates/mappings from Jade-files)
gulp.task('templates', function() {
  templatizer(paths.templates, paths.templates + 'compiled.js');
});;
//we need index.jade/*.html to put the scripts & styles (if using moonBoots there's no need for index.jade/*.html
//because moonBoots automatically generates index.html with appropriate scripts/styles in it)
gulp.task('html', function() {
  gulp.src(paths.src + 'index.jade')
    .pipe(plumber())
    .pipe(jade({
      pretty: environment == 'development'
    }))
    .pipe(gulp.dest(paths.dest))
});

gulp.task('stylus-styles', function () {
    stream = gulp.src(paths.assets + 'css/**/*.styl')
        .pipe(stylus())
        .pipe(plumber())
    if (environment == 'production') {
        stream.pipe(minify())
    }
    stream.pipe(gulp.dest(paths.dest + 'public/css/'))
});

gulp.task('server', function(){
    server(); //just a simple call of startServer() in server.js
});

gulp.task('vendor', ['vendor-scripts']);
gulp.task('compile', ['templates', 'html', 'stylus-styles' ,'css-styles', 'scripts']);

gulp.task('default', ['vendor', 'compile']);
gulp.task('production', ['set-production', 'default']);
