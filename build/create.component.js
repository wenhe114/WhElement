const fs=require("fs")
const path=require("path")
const render=require("json-templater/string")
const template =require("../template/template") 

try {
    const name=process.argv[2]
    console.log(name);
    if (name) {
        if (isExistsFiles(name)) {
            console.error("已经存在该组件");
            process.exit(0)
        }else{
            
            
            fs.writeFileSync(path.resolve(__dirname,'../components.json'), render(template.componentTemplate(name),{}));
            
            fs.writeFileSync(path.resolve(__dirname,'../packages/wh-element/index.ts'), render(template.elementIndexTemplate(name),{}));
            fs.mkdirSync(path.resolve(__dirname,'../packages/'+name))
            fs.mkdirSync(path.resolve(__dirname,'../packages/'+name+'/src'))
            
            fs.writeFileSync(path.resolve(__dirname,'../packages/'+name+'/index.ts'),render(template.componentIndexTemplate(name),{}))
            fs.writeFileSync(path.resolve(__dirname,'../packages/'+name+'/src/index.vue'),render(template.componentVueTemplate(name),{}))
            fs.writeFileSync(path.resolve(__dirname,'../packages/'+name+'/package.json'),render(template.componentPackageTemplate(name),{}))
            console.log("创建成功路径为："+path.resolve(__dirname,'../packages/'+name+".ts"));
            process.exit(0)
        }
    }else{
        console.error("请输入组件名称");
        process.exit(0)
    }
} catch (error) {
    console.error('createPageError', error)
    
}

// 判断是否已经有该组件
function isExistsFiles(name){
    return fs.existsSync(path.resolve(__dirname,'../packages/'+name))
}
