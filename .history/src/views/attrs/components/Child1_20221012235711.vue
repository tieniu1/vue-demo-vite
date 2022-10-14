<template>
  <div b w-50 p-4 mb-3 :class="">
    <h4>子组件</h4>
    <Grandson v-bind="$attrs"></Grandson>
  </div>
</template>
<script>
export default {
  inheritAttrs: false, //关闭默认绑定
};
</script>
<script setup>
import { useAttrs } from 'vue';
import Grandson from './Grandson.vue';
const attrs = useAttrs();
console.log(attrs);
</script>
<style lang="less" scoped>
.child {
  color: green;
}
</style>
