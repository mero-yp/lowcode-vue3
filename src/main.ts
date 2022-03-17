import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
    Button,
    Layout,
    Menu,
    Dropdown
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'


createApp(App).use(store).use(router).use(Button).use(Layout).use(Menu).use(Dropdown).mount('#app')
