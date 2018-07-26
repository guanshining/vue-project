<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="(slide, index) in slides" :key="index">
            <img :src="slide" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script type="module">
    /**
     * parameters :
     *      slides
     *          type : Array
     *              - '路径'
     */
    export default {
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    autoPlay:true
                },
            }
        },
        props:['slides'],
    }
</script>

<style scoped lang="less">
    img{
        width: 100%;
    }
</style>

