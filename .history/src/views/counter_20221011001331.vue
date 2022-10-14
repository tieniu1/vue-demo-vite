<template>
  <div>
    <button @click="decrement">-</button>
    <span>{{ counter }}</span>
    <button @click="increment">+</button>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { counter, increment, decrement } from '../hook/useCounter';
const cc = ref(1);
const updataCc = () => {
  cc.value;
};
</script>
