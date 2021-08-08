<template>
  <div :id="refName"></div>
</template>
<script lang="ts">
import { defineComponent, nextTick,ref,onMounted,watch } from 'vue'
import RFB from "@novnc/novnc/core/rfb"
export default defineComponent({
  name:"WhNovnc",
  props:{
    refName:{
      type:String,
      default:"novncEl"
    },
    password:{
      type:String,
      default:""
    },
    wsUrl:{
      type:String
    },
    background:{
      type:String,
      default:''
    },
    userName:{
      type:String,
      default:""
    }
  },
  setup(props,context) {
    let rfb=ref(null)
    // 连接断开
    function disconnect(msg){
       if (msg.detail.clean) {
        // 根据 断开信息的msg.detail.clean 来判断是否可以重新连接
        connectVnc()
      } else {
        //这里做不可重新连接的一些操作
        console.log('链接失败,重新链接中-------' + props.wsUrl)
        connectVnc()
      }
    }
    // 连接成功
    function success(msg){
      console.log(msg);
      console.log("连接成功");
      
    }
    
    function securityfailure(msg){
      console.log("securityfailure:",msg);
      
    }


    function clipboard(msg){
      console.log("clipboard:",msg);
      
    }
    // 连接vnc
    function connectVnc(){
      // 实例化rfb
      rfb=new RFB(document.getElementById(props.refName),props.wsUrl,{
        // 向vnc 传递的一些参数，比如说虚拟机的开机密码等
        credentials:{
          password:props.password,
          username:props.userName
        }
      })
      rfb.addEventListener('connect', success); // 与服务器连接成功时，触发的事件
      rfb.addEventListener('disconnect',disconnect); // 与服务器连接断开时，触发的事件
      rfb.addEventListener('securityfailure',securityfailure) //与服务器的安全协商失败时会触发securityfailure事件。
      rfb.addEventListener('clipboard',clipboard) // 从服务器收到剪贴板数据时会触发剪贴板事件。
      rfb.scaleViewport = true;  //scaleViewport指示是否应在本地扩展远程会话以使其适合其容器。禁用时，如果远程会话小于其容器，则它将居中，或者根据clipViewport它是否更大来处理。默认情况下禁用。
      rfb.resizeSession = true; //是一个boolean指示是否每当容器改变尺寸应被发送到调整远程会话的请求。默认情况下禁用
      rfb.background=props.background
      // console.log(rfb)
    }

    // 直接mounted周期
    onMounted(()=>{
      connectVnc()
    })
    
    // 监听prop属性变化时，执行
    watch(()=>props,()=>{
      nextTick(()=>{
        connectVnc()
      })
    },{deep:true})

    return {connectVnc,rfb}
  },
})
</script>
