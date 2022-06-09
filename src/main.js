// import axios from 'axios';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from './store/store';

const app= createApp(App);

// axios.interceptors.request.use((config)=>{
//     console.log(config);
// });
app.use(router);
app.use(store)
app.mount('#app');
