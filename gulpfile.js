var gulp 		= require('gulp'),
	bump		= require('gulp-bump'),
	mocha 		= require('gulp-mocha'),
	jshint 		= require('gulp-jshint'),
	notify 		= require('gulp-notify'),
	plumber 	= require('gulp-plumber'),
	istanbul 	= require('gulp-istanbul');

//TODO: npm install --save-dev gulp-istanbul-enforcer

var paths = {
	scripts: ['./lib/**/*.js'],
	tests:{
		specs: ['./test/**/*.spec.js']
	}
}

gulp.task('lint', function(){
	return gulp.src(paths.scripts)
		.pipe(plumber())
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(notify({message: 'JsHint Completed'}));
});

gulp.task('test', ['bump'], function(){
	return gulp.src(paths.tests.specs)
		.pipe(plumber())
		.pipe(mocha({reporter: 'spec'}))
		.pipe(notify({message: 'Specs Completed'}));
});

gulp.task('coverage', function(){
	return gulp.src([paths.scripts[0], paths.tests.specs[0]])
		.pipe(istanbul())
		//.pipe(istanbul.hookRequire())
		//.pipe(istanbul.enforceThreshold({thresholds: {global: 70}}))
		.pipe(notify({message: 'Code Coverage Completed'}));
})

gulp.task('bump', function(){
	return gulp.src('./package.json')
		.pipe(plumber())
		.pipe(bump())
		.pipe(gulp.dest('./'));
});

gulp.task('watch', ['bump'], function(){
	gulp.watch(paths.scripts, ['lint', 'test']);
	gulp.watch(paths.tests.specs, ['test']);
});


gulp.task('default',['lint', 'test', 'watch', 'bump']);