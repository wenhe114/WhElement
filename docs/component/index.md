
# 公共样式
<script setup>
    // import CustomComponent from "../components/el-button/index"
    // import CustomComponent11 from "../../lib/el-button/index"
    // import CustomComponent from "../../packages/button/index"
    function randomColor() {//得到随机的颜色值
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
    }
    import {ref} from "vue"
    let refName=ref("vncEl")
    let background=ref("rgb(40,40,40)")
    setTimeout(()=>{
        
        refName.value="elel"
        console.log("refName",refName)
    },10000)

    // setInterval(()=>{
        // background.value=randomColor()
    // },2000)
</script>

 <!-- <CustomComponent/> -->
<wh-novnc style="width:100%;height:500px" :background="background" :refName="refName" :password="'123456'" wsUrl="ws://192.168.200.141:8888/websockify?vm_uuid=2ffc76fa-c177-47d3-9f38-a712c1aec055"/>

## 安装
<div>npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</div>

```html
<button>默认按钮</button>
<button class="blueBtn">蓝色按钮</button>
<button class="redBtn">红色按钮</button>
<button class="orangeBtn">黄色按钮</button>
<button class="greenBtn">绿色按钮</button>
<button class="grayBtn">灰色按钮</button>
```


