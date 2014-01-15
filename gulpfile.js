// Gulpfile.js
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint');

gulp.task('lint', function () {
  gulp.src('./**/*.js').pipe(jshint());
});

gulp.task('develop', function () {
  nodemon({ script: 'app.js', options: '-e html,js' })
    .on('restart', ['lint'])
});