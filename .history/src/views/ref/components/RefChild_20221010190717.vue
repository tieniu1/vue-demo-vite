<template>
  <div>
    {{ msg }}
  </div>
</template>
<script setup>
import { ref } from 'vue';

const msg = ref('msg');
const updateMsg = (params) => {
  msg.value = params;
};
defineExpose({
  msg,
  updateMsg,
});
</script>
<style></style>
