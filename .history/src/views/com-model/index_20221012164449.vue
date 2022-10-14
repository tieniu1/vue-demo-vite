<template>
  <div>
    <Child1 :modelValue="child1Value1" @update:modelValue="(newValue) =>
    (child1Value1 = newValue)" / >
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Child1 from './components/Child1.vue';
import Child2 from './components/Child2.vue';

const child1Value1 = ref('');
</script>
<style></style>
