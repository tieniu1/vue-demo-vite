<template>
  <div>
    <SlotChild :slotConfig="slotConfig">
      <template v-slot:item-1>普通写法 v-slot:item-1</template>
      <template #item-2> 简写 #item-2</template>
      <template v-slot:[slotNameList[0]]></template>
    </SlotChild>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import SlotChild from './components/SlotChild.vue';
import { slotConfig } from './config/slot-config';

const slotNameList = ['item-3', 'item-4'];
</script>
<style></style>
