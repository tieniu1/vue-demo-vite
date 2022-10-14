<template>
  <div>
    <slot-child />
    <slot-child></slot-child>
  </div>
</template>
<script setup>
import SlotChild from './components/SlotChild.vue';
</script>
<style></style>
