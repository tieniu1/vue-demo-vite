import { ref } from 'vue';
export default function (app) {
  //  传递响应式数据，并且把修改数据的方法也传递过去
  const appMessage = ref('hello');
  const updateAppMessage = (newValue) => {
    appMessage.value = newValue;
  };
  app.provide('appMessage', {
    appMessage,
    updateAppMessage,
  });
  //  传递静态数据
  app.provide('appName', 'hello vite vue3');
}
