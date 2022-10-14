<template>
  <div class="c-nav" b p2>
    <div v-for="(value, key, index) in slotConfig" :key="key" :class="key">
      <slot :name="value" :value="value" :index="index">。。。</slot>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const props = defineProps({
  slotConfig: {
    type: Object,
  },
});
</script>
<style>
.c-nav {
  display: flex;
  flex-wrap: wrap;
}
.c-nav > div {
  padding: 5px;
  border: 1px solid;
  margin: 0 5px;
  white-space: nowrap;
  margin-bottom: 5px;
}
</style>
