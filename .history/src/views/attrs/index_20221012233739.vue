<template>
  <div b w-min p-4 mb-3>
    <h3>祖组件</h3>
    <Child1 class="child" @click="handleClick"></Child1>
    <Child2 class="child"></Child2>
  </div>
</template>
<script setup>
import Child1 from './components/Child1.vue';
import Child2 from './components/Child2.vue';

const rootData = {
  title: '祖组件数据',
  msg: '透传attrs',
};
const handleClick = () => {
  console.log('祖组件点击事件');
};
</script>
<style lang="less" scoped>
.child {
  color: red;
}
</style>
