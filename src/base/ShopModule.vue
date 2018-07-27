<template>
    <router-link tag="div" class="shopModule" :to="shopModule.href">
        <img :src="shopModule.img" alt="">
        <p class="title">{{shopModule.title}}</p>
        <p class="desc">
            <b>￥{{shopModule.skMoney}}</b>
            <span>市场价：￥{{shopModule.priceOrigin}}</span>
        </p>
    </router-link>
</template>

<script>
    export default {
        props:['shopModule']
    }
</script>

<style scoped lang="less">
    .shopModule{
        width: 1.35rem;
        border: 1px solid #e2e2e2;
        padding: .1rem;
        img{
            width: 1rem;
            height: 1rem;
            display: block;
            margin: 0 auto;
        }
        .title{
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            font-size: .12rem;
            text-align: center;
            margin: .1rem 0;
            color: #9e9e9e;
        }
        .desc{
            font-size: .1rem;
            b{
                color: red;
            }
            span{
                text-decoration:line-through;
                color: #e2e2e2;
            }
        }
    }
</style>