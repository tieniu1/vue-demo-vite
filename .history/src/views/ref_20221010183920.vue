<template>
  <div w100 p2 b>
    <input type="text" ref="oInput" />
    <div v-for=""></div>
  </div>
</template>
<script setup>
import { onMounted, ref, watchEffect } from 'vue';

const oInput = ref(null);
onMounted(() => {
  oInput.value.focus();
});

watchEffect(() => {
  //  侦听ref变化时需要判断一下ref是否有值
  if (oInput.value) {
    console.log(oInput.value);
  }
});

const list = ref([]);
</script>
<style></style>
