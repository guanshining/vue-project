import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// Swiper 插件
import VueAwesomeSwiper from 'vue-awesome-swiper';
// 引入Swiper插件的CSS
import 'swiper/dist/css/swiper.css'
// 使用Swiper插件
Vue.use(VueAwesomeSwiper, /* { default global options } */);
//
Vue.config.productionTip = false;
new Vue({
    el: "#app",
    router,
    render: createElement => createElement(App)
})