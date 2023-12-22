'use stric';

const gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
var	spritesmith = require('gulp.spritesmith');
const tinify = require('gulp-tinify');
var	runSequence = require('run-sequence');
