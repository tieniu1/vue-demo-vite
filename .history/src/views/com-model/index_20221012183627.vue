<template>
  <div>
    <Child1 v-model="message1"></Child1>
    <Child1
      :model-value="message"
      @update:model-value="(newValue) => (message = newValue)"
    ></Child1>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import Child1 from './components/Child1.vue';

const message = ref('hello');
const message1 = ref('hello');
watch(message, () => {
  console.log(message.value);
});
</script>
