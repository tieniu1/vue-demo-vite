<template>
  <div>
    <SlotChild :slotConfig="slotConfig">
      <template v-slot:left>左边</template>
      <template #center> <div>中间</div></template>
      <template #right><button>右边</button></template>
    </SlotChild>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import SlotChild from './components/SlotChild.vue';
import { slotConfig } from './config/slot-config';
</script>
<style></style>
