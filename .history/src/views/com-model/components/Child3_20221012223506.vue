<template>
  <div b w-min p-10px>
    <input
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)"
    />
    <input
      type="text"
      :value="msg"
      @input="$emit('update:msg', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps(['title', 'msg']);
defineEmits(['update:title', 'update:msg']);
</script>

<style scoped></style>
