<template>
  <div>
    <SlotChild :slotConfig="slotConfig"></SlotChild>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import SlotChild from './components/SlotChild.vue';
import { slotConfig } from './config/slot-config';
</script>
<style></style>
