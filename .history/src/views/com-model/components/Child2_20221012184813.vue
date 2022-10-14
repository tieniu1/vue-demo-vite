<template>
  <div>
    <input type="text" v-model="value" />
    <div c-red>
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const value = computed(() => {
  get() {
    return props.modelValue;
  };
});

// const value = computed({
//   get() {
//     return props.modelValue;
//   },
//   set(value) {
//     emit('update:modelValue', value);
//   },
// });
</script>
<style></style>
