<template>
  <div>
    <button @click="decrement">-</button>
    <span>{{ counter }}</span>
    <button @click="increment">+</button>
  </div>
</template>
<script>
import { counter, increment, decrement } from "../hook/useCounter";
</script>
