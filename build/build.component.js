/* eslint-disable */
const pkg = require('../package.json')
const path = require('path')
const { getPackages } =  require('@lerna/project')
const css = require('rollup-plugin-css-only')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const vue = require('rollup-plugin-vue')
const rollup = require('rollup')
const typescript = require('rollup-plugin-typescript2')
const { noElPrefixFile } = require('./common')


const deps = Object.keys(pkg.dependencies)
console.log(deps);
const runBuild = async () => {
  let index = 0
  const pkgs = await getPackages()
  console.log(pkgs);
  const inputs = pkgs
    .map(pkg => pkg.name)
    .filter(name =>
      name.includes('@wh-element') &&
      !name.includes('utils'),
    ).slice(process.argv[2], process.argv[3])
      console.log(inputs[index]);
      console.log(pkgs
        .map(pkg => pkg.name)
        .filter(name =>
          name.includes('@wh-element') &&
          !name.includes('utils'),
        ));
  build(inputs[index])

  async function build(name) {
    if (!name) return
    const inputOptions = {
      input: path.resolve(__dirname, `../packages/${name.split('@wh-element/')[1]}/index.ts`),
      plugins: [
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
              'node_modules',
              '__tests__',
            ],
          },
          abortOnError: false,
        }),
      ],
      external(id) {
        return /^vue/.test(id)
          || /^@wh-element/.test(id)
          || deps.some(k => new RegExp('^' + k).test(id))
      },
    }
    const getOutFile = () => {
      const compName = name.split('@wh-element/')[1]
      if(noElPrefixFile.test(name)) {
        return `lib/${compName}/index.js`
      }
      return `lib/wh-${compName}/index.js`
    }
    const outOptions = {
      format: 'es',
      file: getOutFile(),
      paths(id) {
        if (/^@wh-element/.test(id)) {
          if (noElPrefixFile.test(id)) return id.replace('@wh-element', '..')
          return id.replace('@wh-element/', '../wh-')
        }
      },
    }

    const bundle = await rollup.rollup(inputOptions)
    await bundle.write(outOptions)
    index++
    if (index < inputs.length) {
      await build(inputs[index])
    }
  }
}

runBuild()
