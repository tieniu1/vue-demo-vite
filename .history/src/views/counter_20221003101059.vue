<template>
  <div>
    <button @click="decrement">-</button>
    <span>{{ counter }}</span>
    <button @click="increment">+</button>
  </div>
</template>
<script>
import { ref } from "vue";

let counter = ref(0);
function increment() {
  counter.value += 1;
}
function decrement() {
  counter.value -= 1;
}
</script>
