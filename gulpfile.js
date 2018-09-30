require('babel/register')({
  only: /\.jsx$/,
  optional: [
    'runtime',
    'es7.classProperties',
    'es7.decorators',
  ],
});

var eslint = require('gulp-eslint');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var mocha = require('gulp-mocha');

function lint() {
  return gulp.src('src/**/*.jsx')
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format());
}

function test() {
  return gulp.src('src/__tests__/**/*.jsx')
    .pipe(mocha());
}

gulp.task('lint', lint);
gulp.task('test', ['lint'], test);
gulp.task('default', ['test']);
