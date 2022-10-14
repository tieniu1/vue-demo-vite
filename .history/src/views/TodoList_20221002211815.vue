<template>
  <div>
    <nav>
      <input type="text" :value="message" />
      <button>添加</button>
    </nav>
    <ul>
      <li v-for="item in list" :key="item.id" @click="handleCheckItem(item)">
        {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script setup>
let list = [];
let message = "";
</script>

<style></style>
