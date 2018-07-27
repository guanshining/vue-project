<template>
    <div class="nav" :style="{'background-color': backColor}" ref="myNav">
        <router-link tag="li" v-for="item in nav" @click.native="href(item.href)" to="#">
            <img :src="item.icon" alt="">
            <span>{{item.text}}</span>
        </router-link>
    </div>
</template>

<script>
    /**
     * parameters:
     *      backColor 背景颜色
     *      nav
     *          type : object
     *          - href 跳转链接 // 这里写的是跳转外部的链接
     *          - icon 图标
     *          - text 文字
     *      -------------------------------------------
     *      |  |-------|                               |
     *      |  | @   @ |                               |
     *      |  | \___/ |  ---------同第一个长的一样------|
     *      |  |-------|                               |
     *      |     理财                                  |
     *      --------------------------------------------
     *
     */
    export default {
        props: ['nav', 'backColor'],
        methods: {
            setWidth() {
                for (let i = 0; i < this.$refs.myNav.getElementsByTagName('li').length; i++) {
                    let cur = this.$refs.myNav.getElementsByTagName('li')[i];
                    cur.style.width = 100 / this.nav.length + '%'
                }
            },
            href(url) {
                window.location.href = url;
            }
        },
        mounted() {
            this.setWidth();
        }
    }
</script>

<style scoped lang="less">
    .nav {
        display: flex;
        padding: .18rem 0 5px 0;

        li {
            text-align: center;
            img {
                display: block;
                width: .4rem;
                height: .4rem;
                margin: 0 auto;
            }
            span {
                display: block;
                font-size: .1rem;
                margin-top: 6px;
            }
        }
    }
</style>