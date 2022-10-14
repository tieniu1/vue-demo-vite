<template>
  <div>
    <!-- <Child1
      :modelValue="child1Value1"
      @update:modelValue="(newValue) => (child1Value1 = newValue)"
    ></Child1> -->
    <Child1 v-model="message"></Child1>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import Child1 from './components/Child1.vue';
import Child2 from './components/Child2.vue';

const message = ref('hello');
</script>
<style></style>
