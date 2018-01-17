module.exports = function (gulp, plugins) {

  gulp.task('test', function () {

    var ts = require('ts-node/register');

    return gulp.src('test/**/*Test.ts')
      .pipe(plugins.mocha({
        //reporter: 'nyan',
        compilers: {
          ts: ts,
          tsx: ts
        }
      }))

  })

};
