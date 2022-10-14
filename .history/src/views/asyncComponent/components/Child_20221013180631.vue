<template>
  <div></div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';

const AdminPage = defineAsyncComponent(() =>
  import('./components/AdminPageComponent.vue')
);
</script>
<style lang="less" scoped></style>
