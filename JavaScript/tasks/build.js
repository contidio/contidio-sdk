var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var tsify = require('tsify');

module.exports = function (gulp, plugins, config) {

  gulp.task('definitions', ['proto2ts'], function(){

    return gulp.src(['./definitions/header.d.ts', './definitions/proto.d.ts', './definitions/constants.d.ts', './definitions/api.d.ts', './definitions/requests.d.ts'])
      .pipe(plugins.concat('index.d.ts'))
      .pipe(gulp.dest('./'));

  });

  gulp.task('build', ['definitions'], function(){

    var tsProject = plugins.typescript.createProject('tsconfig.json');

    var tsResult = tsProject.src()
      .pipe(tsProject());

    return tsResult.js.pipe(gulp.dest('lib'));

  });

  /*gulp.task('build', ['proto2ts'], function () {

    var bundler = browserify({basedir: config.src.path})
      .add(config.src.main)
      .plugin(tsify);

    return bundler.bundle()
      .pipe(source(config.src.dest))
      .pipe(buffer())
      //.pipe(plugins.uglify())
      .pipe(gulp.dest(config.dist));

  })*/

};
