<template>
  <div>
    <SlotChild :slotConfig="slotConfig">
      <template v-slot:left></template>
      <div></div>
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
