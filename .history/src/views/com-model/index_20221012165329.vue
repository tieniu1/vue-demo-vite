<template>
  <div>
    <Child1 v-model="message"></Child1>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import Child1 from './components/Child1.vue';

const message = ref('hello');
watch(message, () => {
  console.log(message.value);
});
</script>

<style></style>
<!-- <Child1
      :modelValue="child1Value1"
      @update:modelValue="(newValue) => (child1Value1 = newValue)"
    ></Child1> -->
