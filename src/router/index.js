import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
// 路由懒加载的写法 可将对应页面的JS单独打包，不全部打包进一个JS中了，方便查找和定位
const Index   = () => import('../components/Index.vue'),
    Jieqian   = () => import('../components/Jieqian.vue'),
    Shengqian = () => import('../components/Shengqian.vue'),
    Zhuanqian = () => import('../components/Zhuanqian.vue'),
    Vip       = () => import('../components/Vip.vue');

let routes = [
    {
        path: '/index',
        component: Index
    },
    {
        path: '/zhuanqian',
        component: Zhuanqian
    },
    {
        path: '/jieqian',
        component: Jieqian
    },
    {
        path: '/shengqian',
        component: Shengqian
    },
    {
        path: '/vip',
        component: Vip
    },
    {
        path: '/',
        component: Index
    },
    {
        path: '*',
        redirect: Index
    }
];
export default new VueRouter({
    routes
})





