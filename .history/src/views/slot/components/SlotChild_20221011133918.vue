<template>
  <div class="c-nav">
    <div class="c-left">
      <slot name="left"></slot>
    </div>
    <div class="c-center">
      <slot class="center"></slot>
    </div>
    <div class="c-right">
      <slot class="right"></slot>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

let slotConfig = {
  'c-left': {
    name: 'left',
  },
  'c-center': {
    name: 'center',
  },
  'c-right': {
    name: 'right',
  },
};
</script>
<style></style>
