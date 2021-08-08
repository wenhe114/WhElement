const path=require("path")
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const vue=require('rollup-plugin-vue')
const rollup = require('rollup')
const typescript = require('rollup-plugin-typescript2')
const css = require('rollup-plugin-css-only')

const runbuild=async ()=>{
    const op={
        input:path.resolve(__dirname,"../packages/index.ts"),
        plugins:[
            nodeResolve(),
        css(),
        vue({
          target: 'browser',
          css: false,
        }),
        typescript({
          tsconfigOverride: {
            compilerOptions: {
              declaration: false,
            },
            'exclude': [
              '../node_modules',
              '__tests__',
            ],
          },
          abortOnError: false,
        }),
        ]
    }
    const outOptions={
        format: 'es',
        file:"./demo.js",
        paths(id){
            console.log(id);
             return /^vue/.test(id)
            || /^@rollup-demo/.test(id)
        }
    }
    const bundle = await rollup.rollup(op)
    await bundle.write(outOptions)
}

runbuild()