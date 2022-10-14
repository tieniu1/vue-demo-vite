<template>
  <div>
    <SlotChild class="red" :about="about" :msg="msg" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import SlotChild from './components/SlotChild.vue';

const msg = ref('123');
</script>
<style></style>
