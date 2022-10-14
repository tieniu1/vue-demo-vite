import { createApp, ref } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css';
import 'uno.css';

const app = createApp(App);
console.log(1111111111111111);

app.use(router);
//  全局注入
const appMessage = ref('hello');
const updateAppMessage = (newValue) => {
  appMessage.value = newValue;
};
app.provide('appMessage', {
  appMessage,
  updateAppMessage,
});
app.provide('appName', 'hello vite vue3');

app.mount('#app');
