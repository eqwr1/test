import { createApp } from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import './assets/base.css'
import router from './router'
import store from './store'
import './utils/rem'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'

// 1. 引入你需要的组件
// import { Button,Icon } from 'vant';
    // 2. 引入组件样式
// import 'vant/lib/index.css'
import './api/mock'
const app = createApp(App)
app.use(router).use(store )
app.mount('#app')
