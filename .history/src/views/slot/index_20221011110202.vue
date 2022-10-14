<template>
  <div>
    <slot-child />
    <SlotChild></SlotChild>
  </div>
</template>
<script setup>
import SlotChild from './components/SlotChild.vue';
</script>
<style></style>
