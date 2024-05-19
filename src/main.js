import { createApp } from 'vue'
import './style.css'
import App from '@component/App.vue'
import router from './router/index.js'

const app = createApp(App);
app.config.globalProperties.window = window;
app.use(router);
app.mount('#app');
