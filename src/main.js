import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
import './assets/css/icon.css'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'




const app = createApp(App)
installElementPlus(app)
app.use(store)
app.use(router)
app.use(VXETable)
app.mount('#app')
    