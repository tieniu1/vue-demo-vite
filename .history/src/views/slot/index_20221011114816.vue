<template>
  <div>
    <SlotChild :about="about" />
    <div :about="about"></div>
  </div>
</template>
<script setup>
import SlotChild from './components/SlotChild.vue';
</script>
<style></style>
