<template>
  <div><Child></Child></div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';

const Child = defineAsyncComponent(() => import('./components/Child.vue'));
//  高级写法，处理加载失败状态
const Child1 = defineAsyncComponent({
  //  加载函数
  loader: () => import('./components/Child1.vue'),
  // 加载异步组件时使用的组件
  loadingComponent: LoadingComponent,
});
</script>
<style lang="less" scoped></style>
