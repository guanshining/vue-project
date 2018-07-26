<!-- 页面入口 主模板 -->
<template>
    <div>
        <router-view></router-view>
        <Tab></Tab>
    </div>
</template>
<script type="module">
    import Tab from './base/Tab.vue';
    export default {
        components:{
            Tab
        }
    }
</script>
<style lang="less">
    *{
         margin: 0;
         padding: 0;
     }
    a{
        text-decoration: none;
    }
    ul,ol,li{
        list-style: none;
    }
    body{
        width: 100%;
        background: #f5f5f5;
    }
    /* rem 适配 */
    html {font-size: 625%; /*100 ÷ 16 × 100% = 625%*/}
    @media screen and (min-width:360px) and (max-width:374px) and (orientation:portrait) {
        html { font-size: 703%; }
    }
    @media screen and (min-width:375px) and (max-width:383px) and (orientation:portrait) {
        html { font-size: 732.4%; }
    }
    @media screen and (min-width:384px) and (max-width:399px) and (orientation:portrait) {
        html { font-size: 750%; }
    }
    @media screen and (min-width:400px) and (max-width:413px) and (orientation:portrait) {
        html { font-size: 781.25%; }
    }
    @media screen and (min-width:414px) and (max-width:431px) and (orientation:portrait){
        html { font-size: 808.6%; }
    }
    @media screen and (min-width:432px) and (max-width:479px) and (orientation:portrait){
        html { font-size: 843.75%; }
    }
</style>