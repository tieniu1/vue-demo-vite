<template>
  <div>
    <div>{{ x }}</div>
    <div>{{ y }}</div>
    <div style="border: 1px solid">
      <button @click="handleFetch">再次请求</button>
      <div>
        <div style="border: 1px solid red" v-if="error">
          error:{{ error.message }}
        </div>
        <div style="border: 1px solid green" v-else-if="data">
          data:{{ data.hotComments.length }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useMouse } from "../hook/useMouse";
import { useFetch } from "../hook/fetch";
import { ref } from "vue";
let { x, y } = useMouse();

//  使用useFetch 开始
let limit = ref(1);
const baseUrl =
  "https://netease-cloud-music-api-seven-delta-88.vercel.app/comment/music?id=186016&limit=";

const url = ref(baseUrl + limit.value);
const { data, error } = useFetch(url);
const handleFetch = () => {
  limit.value += 1;
  url.value = baseUrl + limit.value;
};
//  使用useFetch 结束
</script>
<style></style>
