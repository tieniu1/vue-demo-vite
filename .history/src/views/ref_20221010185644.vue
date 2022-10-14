<template>
  <div w100 p2 b>
    <input type="text" ref="oInput" />
    <div v-for="item in list" :key="item" ref="itemRefs">{{ item }}</div>
    <input type="text" :ref="refFn" />
  </div>
</template>
<script setup>
import { onMounted, ref, watchEffect } from 'vue';

const oInput = ref(null);
onMounted(() => {
  oInput.value.focus();
  console.log('oInput', oInput.value);
});

watchEffect(() => {
  //  侦听ref变化时需要判断一下ref是否有值
  if (oInput.value) {
    console.log('oInput', oInput.value);
  }
});

const list = ref([1, 2, 3, 4, 5, 6]);
// ref 数组 不保证和元素组顺序相同
const itemRefs = ref([]);

onMounted(() => {
  console.log('itemRefs::', itemRefs.value);
});

const oInput2 = ref(null);
//  模板ref使用函数
const refFn = (el) => {
  oInput2.value = el;
};
onMounted(() => {
  console.log('oInput2', oInput2.value);
});
</script>
<style></style>
