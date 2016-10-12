var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('customSass', function() {
    return gulp.src("./sass/**")
        .pipe(sass(/*{outputStyle: 'compressed'}*/).on('error', sass.logError))
        .on('error', onError)
        .pipe(gulp.dest('./css/'));
});


function onError(err) {
    console.log(err);
    this.emit('end');
}

gulp.task('default',function() {
    gulp.watch("./sass/**",['customSass']);
});