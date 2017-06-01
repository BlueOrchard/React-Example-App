// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

var concat = require('gulp-concat');
var react = require('gulp-react');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('sass', function() {
    gulp.src('assets/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('default', ['sass', 'react-build'], function() {
    gulp.watch('assets/**/*.scss', ['sass']);
    gulp.watch('**/*.jsx', ['react-build']);
});

gulp.task('react-build', function () {
    return browserify({entries: './app.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('.'));
});