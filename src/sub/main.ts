import Vue from 'vue2'
import App from 'sub/App.vue'
import '@/assets/main.css'
import element from 'element-ui'
Vue.use(element)
new Vue({
    el: '#app',
    render: h => h(App)
});
