<template>
  <div>
    <button @click="decrement">-</button>
    <span>{{ counter1 }}</span>
    <button @click="increment">+</button>
  </div>
</template>
<script setup>
import { counter, increment, decrement } from "../hook/useCounter";
</script>
