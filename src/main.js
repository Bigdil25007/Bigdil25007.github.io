import { createApp } from 'vue'
import './style.css'
import App from '@page/App.vue'

const app = createApp(App);
app.config.globalProperties.window = window;
app.mount('#app');
