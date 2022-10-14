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

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);
computed(() => {
  get: () => {
    return props.modelValue;
  };
  set: (val) => {
    emit('update:modelValue', val);
  };
});
</script>
<style></style>
