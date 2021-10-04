var gulp        = require('gulp');
var sass        = require('gulp-sass');
var minify      = require('gulp-minifier');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('watch', function () {
    browserSync.init({
        server: './dist'
    });

    gulp.watch("src/scss/**/*.scss", gulp.series('sass'));
    gulp.watch("src/script/**/*.js", gulp.series('js'));
    gulp.watch(["dist/**/*"]).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass())
        .pipe(minify({
          minify: true,
          minifyCSS: true,
          getKeptComment: function (content, filePath) {
              var m = content.match(/\/\*![\s\S]*?\*\//img);
              return m && m.join('\n') + '\n' || '';
          }
        }))
        .pipe(gulp.dest("dist/"))
        .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src("src/script/*.js")
    .pipe(minify({ minify: true }))
    .pipe(gulp.dest("dist/"))
    .pipe(browserSync.stream());
});

gulp.task('default', gulp.series('sass','js', 'watch'));

gulp.task('dist', gulp.series('sass'));
