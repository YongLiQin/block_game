var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var plugins = require('gulp-load-plugins')();
var babel = require('gulp-babel');
var arr = ['source/js/*.js', 'source/sass/*.scss', 'source/html/*.html'];
gulp.task('script', function  () {
	gulp.src(arr[0])
	// .pipe(plugins.uglify())
	.pipe(gulp.dest('store/js'));

	gulp.src(arr[1])
	.pipe(plugins.sass())
	.pipe(gulp.dest('store/css'))
	.pipe(plugins.livereload());

	gulp.src(arr[2])
	// .pipe(plugins.minifyHtml())
	.pipe(gulp.dest('store/html'));

	// gulp.src('source/js/*.js')
	// .pipe(babel({preset: ['es2015']}))
	// .pipe(gulp.dest("store/js"));

	// gulp.src(arr[0])
	// .pipe(plugins.jshint())
	// .pipe(plugins.jshint.reporter());
});
gulp.task('serve', function  () {
	var app = require('./server/app.js');
	app.server();
});
gulp.task('auto', function  () {
	plugins.livereload.listen()
	gulp.watch(arr, ['script']);
});
gulp.task('default', ['script', 'serve','auto']);