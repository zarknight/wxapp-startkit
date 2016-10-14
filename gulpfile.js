const gulp = require('gulp')
const del = require('del')
const runSequence = require('run-sequence')
const $ = require('gulp-load-plugins')()

// -------------------- Lint ---------------------------

gulp.task('jslint', () => {
  return gulp.src(['./src/**/*.js'])
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});

gulp.task('jsonlint', () => {
  return gulp.src(['./src/**/*.json'])
    .pipe($.jsonlint())
    .pipe($.jsonlint.reporter())
    .pipe($.jsonlint.failAfterError());
});

// -------------------- JSON Files ----------------------

gulp.task('json', ['jsonlint'], () => {
  return gulp.src('./src/**/*.json').pipe(gulp.dest('./dist'))
})

gulp.task('json:watch', () => {
  gulp.watch('./src/**/*.json', ['json'])
})

// -------------------- Image Files ---------------------

gulp.task('images', () => {
  return gulp.src('./src/images/**').pipe(gulp.dest('./dist/images'))
})

gulp.task('images:watch', () => {
  gulp.watch('./src/images/**', ['images'])
})

// -------------------- Image Files ---------------------

gulp.task('templates', () => {
  return gulp.src('./src/**/*.wxml').pipe(gulp.dest('./dist'))
})

gulp.task('templates:watch', () => {
  gulp.watch('./src/**/*.wxml', ['templates'])
})

// -------------------- SCSS Files ----------------------

gulp.task('styles', () => {
  return gulp.src('./src/**/*.scss')
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.extReplace('.wxss'))
    .pipe(gulp.dest('./dist'))
})

gulp.task('styles:watch', () => {
  gulp.watch('./src/**/*.scss', ['styles'])
})

// -------------------- JS Files ------------------------

gulp.task('scripts', ['jslint'], () => {
  return gulp.src('./src/**/*.js')
    .pipe($.babel())
    .pipe(gulp.dest('./dist'))
})

gulp.task('scripts:watch', () => {
  gulp.watch('./src/**/*.js', ['scripts'])
})

// ------------------------------------------------------

gulp.task('clean', () => {
  return del(['./dist/**'])
})

gulp.task('build', [
  'json',
  'images',
  'templates',
  'styles',
  'scripts'
])

gulp.task('watch', [
  'json:watch',
  'images:watch',
  'templates:watch',
  'styles:watch',
  'scripts:watch'
])

gulp.task('build:clean', (callback) => runSequence('clean', 'build', callback))

gulp.task('watch:clean', (callback) => runSequence('build:clean', 'watch', callback))

gulp.task('default', ['watch:clean'])
