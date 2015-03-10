'use strict'

var gulp = require('gulp');
var jade = require('gulp-jade');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var obfuscate = require('gulp-obfuscate');
var minify = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var templatizer = require('templatizer'); //taken from moonBoots config
var server = require('./server'); //export from server.js to start HAPI server
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var wrap = require('gulp-wrap-amd');
var coffee = require('gulp-coffee');
var rimraf = require('rimraf');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var gutil = require('gutil');
var stream;

var environment = 'dev';
var paths = {
  src: './',
  scripts: './scripts/',
  dest: './dist/',
  destCss: './dist/css/',
  destImages: './dist/css/images/',
  destFonts: './dist/css/fonts/',
  destScripts: './dist/scripts/',
  tempCss: './public/css/temp/',
  vendor: './scripts/vendor/',
  images: './public/css/images/',
  fonts: './public/css/fonts/',
  awesomeFonts: './public/fonts/',
  assets: './public/',
  css: './public/css/',
  test: '../test/',
  configs: './configs/',
  templates: './templates/'
};

gulp.task('set-production', function() {
  environment = 'production';
});

//connect server
gulp.task('connect', function () {
    connect.server({
        root: '/',
        port: 3000
    });
});

//linting
gulp.task('lint', function() {
    gulp.src([
                './**/*.js',
                '!./public/**',
                '!./configs/**',
                '!./templates/**',
                '!./scripts/**',
                '!./node_modules/**'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

// Primary task to watch other tasks
gulp.task('watch', function() {
    // LiveReload
    livereload.listen();

    // Watch Sass
    gulp.watch(
        [
            paths.css + '**/*.css'
        ],
        ['css-styles']
    );

});

//stylus styles
gulp.task('stylus-styles', function () {
    stream = gulp.src(paths.css + '**/*.styl')
        .pipe(plumber({
                errorHandler: onError
            }))
        .pipe(stylus());
    if (environment == 'production') {
        stream.pipe(minify());
    }
    stream.pipe(gulp.dest(paths.tempCss))
        .pipe(livereload());
});

//default styles
gulp.task('css-styles', function() {
  stream = gulp.src([
      paths.css + 'bootstrap.css',
      paths.css + 'bootstrap-theme.css',
      paths.css + 'font-awesome.css',
      paths.tempCss + 'app.css',
      paths.css + 'custom.css'
    ])
        .pipe(plumber({
                errorHandler: onError
            }))
        .pipe(concat("styles.css"));

    if (environment == 'production') {
        stream.pipe(minify());
    }
     stream.pipe(gulp.dest(paths.destCss))
         .pipe(livereload());
});

gulp.task('maps', function(){
    stream = gulp.src(paths.css + '**/*.map')
        .pipe(plumber({
                errorHandler: onError
            }))
        .pipe(gulp.dest(paths.destCss));
});

gulp.task('images', function(){
    stream = gulp.src([
                        paths.images + '**/**'
                ])
    .pipe(plumber({
                errorHandler: onError
            }))
        .pipe(gulp.dest(paths.destImages));
});

gulp.task('default-fonts', function(){
    stream = gulp.src([
                paths.fonts + '**/**'
            ])
    .pipe(plumber({
                errorHandler: onError
            }))
        .pipe(gulp.dest(paths.destFonts));
});

gulp.task('fonts-awesome', function(){
    stream = gulp.src([
            paths.awesomeFonts + '**/**'
    ])
    .pipe(plumber({
              errorHandler: onError
          }))
        .pipe(gulp.dest(paths.dest + 'fonts'));
});

//all needed libs
gulp.task('vendor-scripts', function() {
  stream = gulp.src([
      paths.vendor + 'jquery-2.1.3.js',
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
      .pipe(plumber({
                errorHandler: onError
            }))
      .pipe(concat("vendor.js"));

  if (environment == 'production') {
       stream.pipe(uglify());
  }

  stream.pipe(gulp.dest(paths.destScripts));
});

//starting point for browserify
gulp.task('own-scripts', function() {
  stream = gulp.src( [
                paths.src + 'app.js'
            ])
      .pipe(plumber({
                errorHandler: onError
            }))
      .pipe(browserify({
                insertGlobals : true,
                debug: environment === 'development'
            }))
      .pipe(concat('main.js'));

  if (environment == 'production') {
    stream.pipe(uglify());
  }
  stream.pipe(gulp.dest(paths.destScripts));
});


//compile coffeescript
gulp.task('coffee', function() {
    gulp.src(paths.src + '*.coffee')
        .pipe(plumber({
                errorHandler: onError
            }))
        .pipe(coffee(
            {
                bare: true
            }).on('error', gutil.log));

    if (environment == 'production') {
        stream.pipe(minify());
    }

    stream.pipe(gulp.dest(paths.destScripts))
        .pipe(livereload());
});

//cleanup
gulp.task('clean', function() {
    rimraf.sync(paths.dest);
    rimraf.sync(paths.tempCss);
});

//jade templates (we use templatizer from AmpersandJS project
// to generate JS-templates/mappings based on Jade-files)
gulp.task('templates', function() {
  templatizer(paths.templates, paths.templates + 'templates.js');
});

//we need index.jade/*.html to put the scripts & styles
gulp.task('html', function() {
  stream = gulp.src(paths.templates + 'index.jade')
    .pipe(jade({
      pretty: environment == 'development'
    }))
      .pipe(gulp.dest(paths.dest));
});

gulp.task('server', function(){
    server(); //just a simple call of startServer() in server.js
});

gulp.task('vendor',  ['vendor-scripts']);
gulp.task('app',     ['own-scripts']);
gulp.task('styles',  ['stylus-styles','css-styles', 'maps']);
gulp.task('fonts',   ['default-fonts','fonts-awesome']);
gulp.task('assets',  ['styles','fonts', 'images']);
gulp.task('scripts', ['coffee', 'vendor','app']);
gulp.task('ui',      ['templates', 'html']);
gulp.task('compile', ['assets', 'ui', 'scripts']);

gulp.task('live', ['default', 'server', 'watch']);
gulp.task('default', ['clean', 'compile']);
gulp.task('production', ['set-production', 'default']);

var onError = function (err) {
    gutil.log(gutil.colors.red(err));
};
