<template>
  <div>
    <el-button @click="eChangeColor">修改颜色</el-button>
    <el-button @click="$emit('changeColor')">模板修改颜色</el-button>
    <el-button @click="$emit('changShowOrder')">订单显示隐藏</el-button>
  </div>
  <div b w100>
    {{ showOrder }}
    <ol v-if="showOrder">
      <li v-for="orderItem in order">{{ orderItem }}</li>
    </ol>
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
  Boolean: {
    type: Boolean,
  },
});
const emit = defineEmits(['changeColor', 'changShowOrder']);

const eChangeColor = () => {
  emit('changeColor');
};
const { appMessage, updateAppMessage } = inject('appMessage');
console.log('inject:::', appMessage);

const handleUpdateAppMessage = () => {
  updateAppMessage('你好' + randomColor());
};
console.log('inject:::', inject('appName'));
const order = ['帽子', '球鞋', '手机'];
</script>
