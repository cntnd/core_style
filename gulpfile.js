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

gulp.task('default', gulp.series('sass','watch'));

gulp.task('dist', gulp.series('sass'));
