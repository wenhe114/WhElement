
const render=require("json-templater/string")
const Components=require("../components.json")

// import 语句语法模版
var IMPORT_TEMPLATE = `import {{name}} from "../{{name}}"`;

// 渲染component.json文件
const componentTemplate=(name)=>{
    let temp="{"
    Object.keys(Components).forEach(item=>{
        temp+=`
    "${item}":{
        "name":"Wh${firstToUpper(item)}"
    },`
    })
    temp+=`
    "${name}":{
        "name":"Wh${firstToUpper(name)}"
    }
`
    temp+="}"
    return temp
}

// 导入所有组件模板
const elementIndexTemplate=(name)=>{
    let imports=""
    let components=""
    Object.assign(Components,{[name]:{
        name:name
    }})
    Object.keys(Components).forEach((item) => {
    imports+=`
${render(IMPORT_TEMPLATE,{name:item})}`

    components+=`
    ${item},`
    });

    return `
import type {App} from "vue"
${imports}
            
const components=[
${components}
]
            
const install=(app:App,opt:any):void=>{
    components.forEach(component => {
        app.component(component.name, component)
    })
}
            
export {
${components}
    install
}
            
export default{
    install
}`
}


// 组件packagejson模板
const componentPackageTemplate=(name)=>{
return `{
    "name": "@wh-element/${name}",
    "version": "0.0.0",
    "main": "dist/index.js",
    "license": "MIT",
    "peerDependencies": {
        "vue": "3.1.5"
    },
    "devDependencies": {
        "@vue/test-utils": "^2.0.0-beta.3"
    }
}`
}

const componentIndexTemplate=(name)=>`
import { App } from 'vue'
import type { SFCWithInstall } from '../utils/types'
import ${firstToUpper(name)} from './src/index.vue'

${firstToUpper(name)}.install = (app: App): void => {
  app.component(${firstToUpper(name)}.name, ${firstToUpper(name)})
}

const _${firstToUpper(name)}: SFCWithInstall<typeof ${firstToUpper(name)}> = ${firstToUpper(name)}

export default _${firstToUpper(name)}`

const componentVueTemplate=(name)=>
{
    return `
<template>
    <div>我是组件${name}</div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Wh${firstToUpper(name)}',
})
</script>`
}

/**
 * @description 首字母转大写
 * @param {*} str 
 */
 function firstToUpper(str){
    return str.toLowerCase().replace(/( |^)[a-z]/g,(L)=>L.toUpperCase());
}
module.exports ={
    elementIndexTemplate,
    componentPackageTemplate,
    componentIndexTemplate,
    componentVueTemplate,
    componentTemplate,
    firstToUpper
}