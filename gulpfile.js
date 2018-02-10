const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

gulp.task('js', function () {
  return gulp
    .src('./source/js/*.js')
    .pipe(babel({ presets: ['env'] }))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});

gulp.task('js-concat', function () {
  return gulp
    .src('./source/js/partials/*.js')
    .pipe(babel({ presets: ['env'] }))
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('sass', function () {
  return gulp
    .src('./source/scss/*.scss')
    .pipe(sass())
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function () {
  gulp.watch('./source/js/*.js', ['js']);
  gulp.watch('./source/js/partials/*.js', ['js-concat']);
  gulp.watch('./source/scss/*.scss', ['sass']);
});

gulp.task('default', ['js', 'sass']);
