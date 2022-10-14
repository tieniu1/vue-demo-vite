<template>
  <div w100 p2 b>
    <input type="text" ref="oInput" />
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue';

const oInput = ref(null);
onMounted(() => {
  oInput.value.focus();
});
</script>
<style></style>
