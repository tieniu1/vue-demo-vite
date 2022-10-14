<template>
  <div>
    <Child1
      :modelValue="child1Value1"
      @update:modelValue="(newValue) => (child1Value1 = newValue)"
    ></Child1>
    <Child1 v-model="child1Value1"></Child1>
  </div>
</template>
<script>
import { ref } from 'vue';
import Child1 from './components/Child1.vue';
import Child2 from './components/Child2.vue';

export default defineComponent({
  setup() {
    const child1Value1 = ref('111');
    return {
      ref,
      Child1,
      Child2,
      child1Value1,
    };
  },
});
</script>
<style></style>
