<template>
  <div>
    <SlotChild :slotConfig="slotConfig">
      <template v-slot:item-1>普通写法 v-slot:item-1</template>
      <template #item-2>简写 #item-2</template>
      <!-- <template v-slot:[name1]>{{ name1 }}</template> -->
      <template v-slot:[nameList.0]>{{ nameList[0] }}</template>
    </SlotChild>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import SlotChild from './components/SlotChild.vue';
import { slotConfig } from './config/slot-config';

const name1 = 'item-3';
const nameList = ref(['item-3']);
</script>
<style></style>
