<template>
  <div>
    <SlotChild
      class="red bg-transparent bg-current"
      :about="about"
      :msg="msg"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import SlotChild from './components/SlotChild.vue';
</script>
<style></style>
