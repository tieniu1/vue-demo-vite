<template>
  <div>
    {{ appMessage }}
  </div>
</template>
<script setup>
import { myInjectionKey } from '@/global/provide/provide-keys.js';
import { inject } from 'vue';
const { appMessage, updateAppMessage } = inject(myInjectionKey);
console.log('全局注入的', appMessage.value);
setTimeout(() => {
  updateAppMessage('fleet');
}, 1000);
</script>
<style lang="less" scoped></style>
