<template>
  <div>
    <Child1 v-model="message1"></Child1>
    <Child1
      :model-value="message"
      @update:model-value="(newValue) => (message = newValue)"
    ></Child1>
    <Child2 v-model="message2"></Child2>
  </div>
</template>
<script setup>
import { ref, watch, watchEffect } from 'vue';
import Child1 from './components/Child1.vue';
import Child2 from './components/Child2.vue';

const message = ref('hello');
const message1 = ref('message1');
const message2 = ref('message2');
watchEffect(() => {
  console.log(message.value);
  console.log(message2.value);
});
</script>
