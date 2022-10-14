<template>
  <div b w-min p-4 mb-3>
    <h3>祖组件</h3>
    <Child1 v-bind="rootData"></Child1>
  </div>
</template>
<script setup>
import Child1 from './components/Child1.vue';

const rootData = {
  title: '祖组件数据',
  msg: '透传attrs',
};
</script>
<style lang="less" scoped></style>
