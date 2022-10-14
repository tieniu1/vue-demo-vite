<template>
  <div><Child></Child></div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';

const Child = defineAsyncComponent(() => import('./components/Child.vue'));
//  高级写法，处理加载失败状态
const Child1 = defineAsyncComponent({
  loader: import('./components/Child1.vue'),
});
</script>
<style lang="less" scoped></style>
