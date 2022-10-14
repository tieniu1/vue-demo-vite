<template>
  <div b w-100 p-4 mb-3>
    <h3>model 和 computer</h3>
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

const value = computed({
  get: () => {
    return props.modelValue;
  },
  set: (value) => {
    emit('update:modelValue', value);
  },
});
const name = computed({});
</script>
<style></style>
