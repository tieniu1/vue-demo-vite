<template>
  <div w100 p2 b>
    <input type="text" ref="oInput" />
  </div>
</template>
<script setup>
import { onMounted, ref, watchEffect } from 'vue';

const oInput = ref(null);
onMounted(() => {
  oInput.value.focus();
});
watchEffect((value, oldValue) => {
  console.log(value, oldValue);
  if(value)
});
</script>
<style></style>
