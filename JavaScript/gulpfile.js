var gulp = require('gulp');
var plugins = require( 'gulp-load-plugins')();
var config = require('./config.json');

require('load-gulp-tasks')(gulp, plugins, config);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

gulp.task('default', function() {
  Object.keys(gulp.tasks).sort().forEach(function (name) {
    console.log(name);
  });
});
