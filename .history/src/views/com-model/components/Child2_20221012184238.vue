<template>
  <div>
    <input type="text" v-model="modelValue" />
    <div c-red>
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';

defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);
computed(() => {
  get: () => {
    return modelValue.value;
  };
  set: (val) => {
    emit('update:modelValue', val);
  };
});
</script>
<style></style>
