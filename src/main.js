import { createApp, ref } from 'vue';
import App from './App.vue';
import router from './router';
import { globalRegister } from './global';
import './assets/main.css';
import 'uno.css';

const app = createApp(App);

//  全局注入
globalRegister(app);

app.use(router);

app.mount('#app');
