<template>
  <div><Child></Child></div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';

const Child = defineAsyncComponent(() => import('./components/Child.vue'));
const Child1 = defineAsyncComponent(() => import('./components/Child1.vue'));
</script>
<style lang="less" scoped></style>
