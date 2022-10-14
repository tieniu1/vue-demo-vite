<template>
  <div b p-4 mb-3>
    <h5>孙组件</h5>
    <dl>
      <dt>{{ title }}</dt>
      <dd>{{ msg }}</dd>
    </dl>
  </div>
</template>
<script setup>
defineProps(['title', 'msg']);
</script>
<style lang="less" scoped></style>
