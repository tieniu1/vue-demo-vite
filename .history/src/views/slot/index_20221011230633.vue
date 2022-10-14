<template>
  <div>
    <SlotChild :slotConfig="slotConfig">
      <template v-slot:item-1>普通写法 v-slot:item-1</template>
      <template #item-2>简写 #item-2</template>
      <template #[name1]>动态插槽名 {{ name1 }}</template>
      <template #[getName(nameList,0)]
        >数组元素作为插槽名{{ nameList[0] }}</template
      >
      <template #[nameObj.name]>对象元素动态插槽名{{ nameObj.name }}</template>
    </SlotChild>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import SlotChild from './components/SlotChild.vue';
import { slotConfig } from './config/slot-config';

const name1 = 'item-3';
const nameList = ['item-4'];
const nameObj = {
  name: 'item-5',
};
const getName = (list, index) => {
  return list[index];
};
</script>
<style></style>
