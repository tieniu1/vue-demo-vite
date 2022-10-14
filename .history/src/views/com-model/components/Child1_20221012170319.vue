<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
  {{ modelValue }}
</template>
<script>
defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>
<style></style>
