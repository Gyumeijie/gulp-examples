var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var logger = function(file){
    reload(file);
    console.log(file.path)
};

gulp.task('serve',function() {
    browserSync({
        server: {
            baseDir: './',
        }
    });
    gulp.watch(["./*.html"], logger);
});
