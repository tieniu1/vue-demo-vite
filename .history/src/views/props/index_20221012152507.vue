<template>
  <div>
    <PropChildVue
      :p-color="pColor"
      v-bind="propObj"
      v-bind:b="propObjB"
      showOrder=""
      @changeColor="handleChangeColor"
    />
  </div>
</template>
<script setup>
import { readonly, ref } from 'vue';

import PropChildVue from './components/PropChild.vue';

import { randomColor } from '@/utils/common';

const title1 = ref('小明');
const age1 = ref(18);
const propObj = readonly({
  title1: title1,
  age1: age1,
});
const title2 = ref('李子');
const age2 = ref(12);
const propObjB = readonly({
  title2: title2,
  age2: age2,
});
let pColor = ref('red');

const handleChangeColor = () => {
  pColor.value = randomColor();
  console.log(randomColor());
};
</script>
<style></style>
