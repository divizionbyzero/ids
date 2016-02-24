var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var jade = require('gulp-jade');
var compass = require('compass');



gulp.task('sass', function () {
    return sass('app/styles/components/style.sass')
        .on('error', sass.logError)
        .pipe(gulp.dest('app/styles'));
});


gulp.task('jade', function () {
    var YOUR_LOCALS = {};
    gulp.src('app/layout/templates/info.jade')
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty: true
        }))
        .pipe(gulp.dest('app/layout/html'));
    gulp.src('app/layout/templates/info.jade')
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty: true
        }))
        .pipe(gulp.dest('app'));
});

gulp.task('watch', function () {
    gulp.watch('app/styles/scss/**/*.scss', ['sass']);
    gulp.watch('app/layout/**/*.jade', ['jade']);
    // Other watchers
});



gulp.task('server', function() {
    gulp.src('./')
        .pipe(server({
            port: 3000,
            livereload: true,
            //directoryListing: true,
            directoryListing: {
                enable: false,
                path: './'
            },
            fallback: 'app/info.html',
            open: true
        }))
        .pipe(debug({title: 'Debugger says:'}));
});

gulp.task('default', ['sass', 'jade', 'watch', 'server']);