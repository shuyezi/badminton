var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var paths = {
  sass: ['./scss/**/*.scss'],
  js: ['./js/**/*.js']
};

//样式任务
gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

//js任务
gulp.task('js', function(){
  console.log("task==js");
});

gulp.task('watch', function() {
  gulp.watch([paths.sass, paths.js], ['sass', 'js']);
});

//本地服务器
gulp.task('webserver', function() {
  connect.server({
    host: "127.0.0.1",
    port: 9999,
    root: "www"
  });
}); 

//调试任务
gulp.task('debug', ['webserver', 'sass', 'js', 'watch']);