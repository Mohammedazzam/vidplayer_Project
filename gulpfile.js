var gulp = require("gulp"),
    concat = require("gulp-concat"),
    prefix = require("gulp-autoprefixer"),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    newy    = require("gulp-newy");
const autoPrefixer = require("gulp-autoprefixer");
const minify = require("gulp-minify");

gulp.task('html', function () {
    return gulp.src('stage/html/**/*.pug')
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('dist'))
});

gulp.task('css', function () {
    return gulp.src(['stage/css/**/*.css', 'stage/css/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoPrefixer())
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        .pipe(livereload())
});

gulp.task('js', function () {
    return gulp.src('stage/js/func.js')
        .pipe(concat('main.js'))
        .pipe(minify())
        .pipe(gulp.dest('dist/js'))
        .pipe(livereload())
});

gulp.task('watch', function () {
    require('./server.js');
    livereload.listen();
    gulp.watch(['stage/css/**/*.css', 'stage/css/**/*.scss'], ['css']);
    gulp.watch('stage/html/**/*.pug', ['html']);
    gulp.watch('stage/js/func.js', ['js']);
});