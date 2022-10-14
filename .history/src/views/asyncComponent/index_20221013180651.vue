<template>
  <div><Child></Child></div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';
import Child from './components/Child.vue';

const AdminPage = defineAsyncComponent(() => import('./components/Child.vue'));
</script>
<style lang="less" scoped></style>
