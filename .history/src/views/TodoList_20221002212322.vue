<template>
  <div>
    <nav>
      <input type="text" :value="message" />
      <button @click="handleAdd">添加</button>
    </nav>
    <ul>
      <li v-for="item in list" :key="item.id" @click="handleCheckItem(item)">
        {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
let list = ref([]);
let message = ref("");

function handleAdd() {
  let item = {};
}
</script>

<style>
ul {
  border: 1px solid;
  width: 300px;
  min-height: 300px;
  padding: 20px;
  margin: 20px;
}
</style>
