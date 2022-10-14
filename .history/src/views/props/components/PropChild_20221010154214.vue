<template>
  <div>
    <button @click="eChangeColor">修改颜色</button>
    <button @click="$emit('changeColor')">模板修改颜色</button>
  </div>

  <div
    b
    w100
    :style="{
      color: pColor,
    }"
  >
    <div p5 b mb2>{{ title1 }} {{ age1 }}</div>
    <div p5 b mb2>
      {{ $attrs.b.title2 }}
      {{ $attrs.b.age2 }}
    </div>
    <div>
      <button @click="handleUpdateAppMessage">修改inject-value</button>
      {{ appMessage }}
    </div>
  </div>
</template>
<script setup>
import { useAttrs, inject } from 'vue';
import { randomColor } from '../../../utils/common';

const attrs = useAttrs();
console.log(attrs);

const props = defineProps({
  pColor: {
    type: String,
  },
  title1: {
    type: String,
  },
  age1: {
    type: Number,
  },
});
const emit = defineEmits(['changeColor']);

const eChangeColor = () => {
  emit('changeColor');
};
const { appMessage, updateAppMessage } = inject('appMessage');
console.log('inject:::', appMessage);

const handleUpdateAppMessage = () => {
  updateAppMessage('你好' + randomColor());
};
console.log('inject:::', inject('appName'));
</script>
