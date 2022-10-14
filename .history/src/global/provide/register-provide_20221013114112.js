import { ref } from 'vue';
import { myInjectionKey, myInjectionKeyName } from './provide-keys';
export default function (app) {
  //  1. 传递静态数据
  app.provide('appName', 'hello vite vue3');
  //  2. 传递响应式数据，并且把修改数据的方法也传递过去
  const appMessage = ref('hello');
  const updateAppMessage = (newValue) => {
    appMessage.value = newValue;
  };
  app.provide('appMessage', {
    appMessage,
    updateAppMessage,
  });
  //  3.
}
