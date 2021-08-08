<template>
 <!-- <Fragment> -->
  {{ message }}
  <button @click="handleClick">点我</button>
  <el-button>测试</el-button>
  <!-- <whbutton></whbutton> -->
 <!-- </Fragment> -->
</template>
<script>
import { Fragment, ref } from 'vue'
// import whbutton from "../../packages/button/src/index.vue"
// import whbutton from "./component/wh-button.vue"
export default {
 name: 'root',
//  components: {Fragment,whbutton},
 setup() {
  const message = ref('hello')
  const handleClick = () => {
   message.value = 'hit'
  }

  return {
   message,
   handleClick,
  }
 },
}
</script>