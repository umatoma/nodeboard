var gulp = require('gulp');
var sass = require('gulp-sass');
var exec = require('child_process').exec;

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', function() {
  gulp.src('public/stylesheets/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('mongo.start', function(cb) {
  exec('mongod --config conf/mongod.conf --fork', function(err, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);

    if (err) return cb(err);
    cb();
  });
});