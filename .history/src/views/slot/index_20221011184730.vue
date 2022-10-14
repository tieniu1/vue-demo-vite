<template>
  <div>
    <SlotChild :slotConfig="slotConfig">
      <template v-slot:left></template>
      <template #center> <div></div></template>
      <button></button>
    </SlotChild>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import SlotChild from './components/SlotChild.vue';
import { slotConfig } from './config/slot-config';
</script>
<style></style>
