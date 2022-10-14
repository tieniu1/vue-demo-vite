<template>
  <button @click="open = true">open</button>
  <div v-if="open" class="modal">
    <p>Hello from the modal!</p>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const open = ref(false);
</script>
<style lang="less" scoped></style>
