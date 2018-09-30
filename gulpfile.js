var gulp = require('gulp');
var sass = require('gulp-sass');
var coffee = require('gulp-coffee');


gulp.task('hello', function() {
  console.log('Hello Zell');
});







gulp.task('sass', function () {
  return gulp.src('./app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dest/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./app/sass/**/*.scss', ['sass']);
});


gulp.task('coffee', function() {
  gulp.src('./app/coffee/*.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./dest/js/'));
});