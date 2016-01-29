// Load plugins
// include gulp
var gulp = require('gulp'); 
// include gulp-notify plugin
var notify = require('gulp-notify');
// include gulf-filesize plugin
var filesize = require('gulp-filesize');
// include gulp-cssnano plugin
var cssnano = require('gulp-cssnano');
// include gulp-rename plugin
var rename = require('gulp-rename');

var jshint = require('gulp-jshint');

gulp.task('css', function(){
	return gulp.src('app/css/app.css')
	.pipe(rename({suffix: '.min'}))		  
	   .pipe(cssnano()) // minify CSS with gulp-cssnano 
	   .pipe(filesize()) //to know the file size
	   .pipe(gulp.dest('app/css/min'))
       .pipe(notify({ message: 'Css task complete' }));// notify a message when the task is complete 
   });

// JS hint task
gulp.task('jshint', function() {
	gulp.src('app/js/**/*.js')
	.pipe(jshint())
    .pipe(filesize()) //to know the file size
    .pipe(jshint.reporter('default'));
});

gulp.task('watch', function(){
  gulp.watch('app/css/**/*.css', ['css']);   //watch all css files and folders
  gulp.watch('app/js/**/*.js', ['jshint']);   //watch all js files and folders

});

//default task
gulp.task('default', function() {
	gulp.start('css');
});