'use strict'
/* eslint-disable @typescript-eslint/no-var-requires */
const { series, src, dest } = require('gulp')
const cssmin = require('gulp-cssmin')

function copydist() {
  return src('../document/.vitepress/dist/**')
    .pipe(dest('../docs'))
}

function copyPubuilc(){
    return src('../document/.vitepress/public/**')
    .pipe(dest('../docs'))
}

exports.build = series(copydist,copyPubuilc)
