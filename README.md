# 目录介绍
    build：脚本目录
    docs：文档目录
    lib：打包输出目录
    packages：组件目录
    template：生成基础组件模板
    typings：类型申明文件
    web：前端项目目录
    components.json 组件汇总json
## npm命令
1、打包组件

    npm run build
2、运行docs文档服务

    npm run dev:docs
3、运行前端服务

    npm run dev:web
4、创建生成基础组件以及配置

    npm run create
5、使用组件库
    
    装依赖
    npm i --save wh-element

    导入
    import WhElement from "wh-element"

    注册
    Vue.use(WhElement)

    使用例子比如
    <wh-button></wh-button>