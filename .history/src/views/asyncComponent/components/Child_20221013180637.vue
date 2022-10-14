<template>
  <div></div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';

const AdminPage = defineAsyncComponent(() => import('./components/Child.vue'));
</script>
<style lang="less" scoped></style>
