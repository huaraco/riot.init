var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function () {
  gulp.src('app/**/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/'));  
});

gulp.task('watch', function(){
  gulp.watch('app/**/*.js', ['default'])
})