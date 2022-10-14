<template>
  <div></div>
</template>
<script setup>
import {
  myInjectionKey,
  myInjectionKeyName,
} from '@/global/provide/register-provide';
import { inject } from 'vue';

const { appMessage, updateAppMessage } = inject('myInjectionKey');
console.log(appMessage.value);
console.log(updateAppMessage);
setTimeout(() => {
  updateAppMessage('fleet', appMessage);
}, 500);
</script>
<style lang="less" scoped></style>
