<template>
  <div>
    <SlotChild :about="about" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import SlotChild from './components/SlotChild.vue';
const msg = ref();
</script>
<style></style>
