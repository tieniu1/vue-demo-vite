<template>
  <div>
    <button @click="decrement">-</button>
    <span>{{ counter1 }}</span>
    <button @click="increment">+</button>
  </div>
</template>
<script setup>
import { ref } from "vue";

// import { counter, increment, decrement } from "../hook/useCounter";
let counter1 = ref("123");
function increment() {
  console.log(2222222);
  counter1.value += 1;
}
function decrement() {
  console.log(11111);
  counter1.value -= 1;
}
</script>
