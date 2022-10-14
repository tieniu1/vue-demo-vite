<template>
  <div flex gap-2 wrap>
    <Child1 v-model="message1"> <h3>v-model 写法</h3></Child1>
    <Child1
      :model-value="message"
      @update:model-value="(newValue) => (message = newValue)"
    >
      <h3>v-model 复杂写法</h3></Child1
    >
    <Child2 v-model="message2"> {{ message2 }}</Child2>
    <Child3 v-model:title="title" v-model:msg="msg"></Child3>
    <Child4 v-model="childValue" v-model:title="childTitle"></Child4>
  </div>
</template>
<script setup>
import { ref, watch, watchEffect } from 'vue';
import Child1 from './components/Child1.vue';
import Child2 from './components/Child2.vue';
import Child3 from './components/Child3.vue';
import Child4 from './components/Child4.vue';

const message = ref('hello');
const message1 = ref('message1');
const message2 = ref('message2');
const title = ref('title');
const msg = ref('msg');

const childValue = ref('childValue');
const childTitle = ref('childTitle');

watchEffect(() => {
  console.log(message.value);
  console.log(message2.value);
});
</script>
