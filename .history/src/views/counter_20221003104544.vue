<template>
  <div>
    <button @click="decrement">-</button>
    <span>{{ counter }}</span>
    <button @click="increment">+</button>
  </div>
</template>
<script>
import { ref } from "vue";

// import { counter, increment, decrement } from "../hook/useCounter";
let counter = ref(0);
function increment() {
  console.log(2222222);
  counter.value += 1;
}
function decrement() {
  console.log(11111);
  counter.value -= 1;
}
</script>
