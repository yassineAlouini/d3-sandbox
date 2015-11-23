// Add a live reload + watch task and a bundling one using browserify
'use strict';
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

var paths = {
  scripts: ['index.js']
};

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(paths.scripts, ['browserify']);
});

gulp.task('browserify', function() {
    return browserify(paths.scripts)
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./'))
        .pipe(livereload())
        .pipe(connect.reload());
});


gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});


gulp.task('default', ['watch', 'connect', 'browserify']);
