console.log("process.env.NODE_ENV",process.env.NODE_ENV);
module.exports = {
    title: "公共组件库开发",// 网站标题
    description: '公共组件库开发.', //网站描述
    base: process.env.NODE_ENV==="production"?'/wh-element':'/', //  部署时的路径 默认 /  可以使用二级地址 /base/
    // lang: 'en-US', //语言
    repo: 'vuejs/vitepress',
    head: [
        // 改变title的图标
        [
            'link',
            {
                rel: 'icon',
                href: process.env.NODE_ENV==="production"?'/wh-element/1.jpg':'./public/1.jpg',//图片放在public文件夹下
            },
        ],
    ],
    // 主题配置
    themeConfig: {
        //   头部导航
        nav: [
            { text: '首页', link: '/' },
            { text: '组件', link: '/component/' },
        ],
    },
}