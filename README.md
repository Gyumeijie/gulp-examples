# gulp-examples

## browserSync

This example is very simple, watching the files and reloading them, so every change to files in __baseDir__ will soon be reflected on the web page you opened without manually refreshing the tab.

```javascript
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var logger = function(file){
    reload(file);
    console.log(file.path)
};

gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: './',
        }
    });
    gulp.watch(["./*.html"], logger);
});
```
#### Caveats

> Note that gulp.watch takes a glob as input, but not a specific file name.In other words, gulp.watch('specific-file-name')
> will not work.
