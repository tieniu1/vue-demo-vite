<template>
  <div b w-50 p-4 mb-3>
    <h3>多个model</h3>
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)"
    />
    {{ title }}
    <input
      type="text"
      :value="msg"
      @input="$emit('update:msg', $event.target.value)"
    />
    {{ text }}
  </div>
</template>

<script setup>
defineProps(['title', 'msg']);
defineEmits(['update:title', 'update:msg']);
</script>

<style scoped></style>
