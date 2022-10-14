<template>
  <div></div>
</template>
<script setup>
import { myInjectionKey } from '@/global/provide/provide-keys.js';
import { inject } from 'vue';
console.log(myInjectionKey);
const { appMessage, updateAppMessage } = inject(myInjectionKey);
console.log('1234', appMessage.value);
console.log(updateAppMessage);
setTimeout(() => {
  updateAppMessage('fleet', appMessage);
}, 500);
</script>
<style lang="less" scoped></style>
