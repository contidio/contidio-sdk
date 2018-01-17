module.exports = function (gulp, plugins) {

  gulp.task('doc', function () {

    return gulp
      .src(["src/**.ts"])
      .pipe(plugins.typedoc({
        // TypeScript options (see typescript docs)
        module: "commonjs",
        target: "es5",
        includeDeclarations: true,

        // Output options (see typedoc docs)
        out: "./docs",

        // TypeDoc options (see typedoc docs)
        name: "Contidio.Sdk",
        ignoreCompilerErrors: true,
        version: true,
        theme: 'minimal'
      }))
      ;

  })

};
