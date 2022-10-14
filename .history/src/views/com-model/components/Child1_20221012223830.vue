<template>
  <div b w-50 p-4 mb-3>
    <h3>v-model 复杂写法</h3>
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
