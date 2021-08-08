'use strict'
/* eslint-disable @typescript-eslint/no-var-requires */
const { series, src, dest } = require('gulp')
const cssmin = require('gulp-cssmin')

function copydist() {
  return src('../docs/.vitepress/dist/**')
    .pipe(dest('../dist'))
}

function copyPubuilc(){
    return src('../docs/.vitepress/public/**')
    .pipe(dest('../dist'))
}

exports.build = series(copydist,copyPubuilc)
