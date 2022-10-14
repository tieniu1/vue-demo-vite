<template>
  <div class="c-nav">
    <div v-for="(value, key) in slotConfig" :key="key" :class="key">
      <slot :name="value.name"></slot>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
</script>
<style></style>
