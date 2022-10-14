<template>
  <div b w-50 p-4 mb-3>
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
import Grandson from './Grandson.vue';
</script>
<style lang="less" scoped>
.child {
  color: green;
}
</style>
