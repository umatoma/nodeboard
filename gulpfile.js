var gulp = require('gulp');
var sass = require('gulp-sass');
var exec = require('child_process').exec;
var eslint = require('gulp-eslint');
var gutil = require('gulp-util');

gulp.task('default', function() {
  // place code for your default task here
});

/**
* Compile sass files
*/
gulp.task('sass', function() {
  return gulp.src('public/stylesheets/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets'));
});

/**
* Start MongoDB
*/
gulp.task('mongo.start', function(cb) {
  var child = exec('mongod --config conf/mongod.conf --fork');
  child.stdout.on('data', function(data) {
    gutil.log(data);
  });
  child.stderr.on('data', function(data) {
    gutil.log(gutil.colors.red(data));
  });
  child.on('close', function(code) {
    gutil.log('closing code:', gutil.colors.cyan(code));
    cb();
  });
});

/**
* Stop MongoDB
*/
gulp.task('mongo.stop', function(cb) {
  var child = exec('kill `pgrep mongod`');
  child.stdout.on('data', function(data) {
    gutil.log(data);
  });
  child.stderr.on('data', function(data) {
    gutil.log(gutil.colors.red(data));
  });
  child.on('close', function(code) {
    gutil.log('closing code:', gutil.colors.cyan(code));
    cb();
  });
});

/**
* Lint with ESLint
*/
gulp.task('lint.check', function() {
  return gulp.src(['**/*.js','!node_modules/**'])
    .pipe(eslint({ configFile: '.eslintrc' }))
    .pipe(eslint.format())
    .pipe(eslint.results(function(results) {
        gutil.log('Total Results: ' + results.length);
        gutil.log('Total Warnings: ' + results.warningCount);
        gutil.log('Total Errors: ' + results.errorCount);
    }));
});