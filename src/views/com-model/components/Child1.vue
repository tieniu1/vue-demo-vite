<template>
  <div b w-50 p-4 mb-3>
    <slot></slot>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    {{ modelValue }}
  </div>
</template>
<script setup>
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>
<style></style>
