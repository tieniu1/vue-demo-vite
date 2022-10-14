<template>
  <button @click="open = true"></button>
  <div></div>
</template>
<script setup>
import { ref } from 'vue';

const open = ref(true);
</script>
<style lang="less" scoped></style>
