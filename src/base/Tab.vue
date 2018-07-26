<template>
    <!-- 底部导航 -->
    <div class="tab">
        <router-link to="/index" tag="li">
            <img :src="this.hash === ('index' || '/') ? this.aryActive[0] : this.ary[0]">
            <span>首页</span>
        </router-link>
        <router-link to="/zhuanqian" tag="li">
            <img :src="this.hash === 'zhuanqian' ? this.aryActive[1] : this.ary[1]">
            <span>赚钱</span>
        </router-link>
        <router-link to="/jieqian" tag="li">
            <img :src="this.hash === 'jieqian' ? this.aryActive[2] : this.ary[2]">
            <span>借钱</span>
        </router-link>
        <router-link to="/shengqian" tag="li">
            <img :src="this.hash === 'shengqian' ? this.aryActive[3] : this.ary[3]">
            <span>省钱</span>
        </router-link>
        <router-link to="/vip" tag="li">
            <img :src="this.hash === 'vip' ? this.aryActive[4] : this.ary[4]">
            <span>金融会员</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Tab",
        data() {
            return {
                hash: '',
                ary: [
                    '../public/index.png',
                    '../public/zhuanqian.png',
                    '../public/jieqian.png',
                    '../public/shengqian.png',
                    '../public/vip.png'
                ],
                aryActive: [
                    '../public/index-active.png',
                    '../public/zhuanqian-active.png',
                    '../public/jieqian-active.png',
                    '../public/shengqian-active.png',
                    '../public/vip-active.png'
                ]
            }
        },
        created() {
            this.hash = window.location.hash.split('/')[1] || '#/index';
        },
        watch:{
            // 监听路由变化
            $route(to, from) {
                let path = to.path.split('/')[1];
                this.hash = path;
            }
        },
    }
</script>

<style scoped lang="less">
    .tab {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        font-size: .11rem;
        display: flex;
        background: #fff;
        box-shadow: 0 -3px 4px rgba(0, 0, 0, .03);
        padding: .1rem 0;
        li {
            width: 20%;
            text-align: center;
            img {
                width: .22rem;
                height: .22rem;
                margin: 0 auto 3px auto;
                display: block;
            }
            span {
                color: #B1B4BB;
            }
            &.router-link-active {
                span {
                    color: #4668FF
                }
            }
        }
    }
</style>