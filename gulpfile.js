// Add a live reload + watch task and a bundling one using browserify
'use strict';
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

var paths = {
  scripts: ['index.js']
};

gulp.task('watch', function() {
  plugins.livereload.listen();
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('browserify', function() {
    return browserify(paths.scripts)
        .bundle()
        //Pass desired output filename to vinyl-source-stream
        .pipe(source('bundle.js'))
        // Start piping stream to tasks!
        .pipe(gulp.dest('./'));
        .pipe(plugins.livereload());
})



gulp.task('default', ['watch']);
