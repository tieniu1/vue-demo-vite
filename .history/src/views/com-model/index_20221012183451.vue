<template>
  <div>
    <Child1 v-model="message"></Child1>
    <Child1
      :model-value="message"
      @update:model-value="message = modelValue"
    ></Child1>
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
