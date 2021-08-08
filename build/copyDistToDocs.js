'use strict'
/* eslint-disable @typescript-eslint/no-var-requires */
const { series, src, dest } = require('gulp')
const cssmin = require('gulp-cssmin')

function copydist() {
  return src('../docs/.vitepress/dist/**')
    .pipe(dest('../docs/dist'))
}

function copyPubuilc(){
    return src('../docs/.vitepress/public/**')
    .pipe(dest('../docs/dist'))
}

exports.build = series(copydist,copyPubuilc)
