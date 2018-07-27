<template>
    <h2  :style="{'background-color': backColor}">
        - {{sectionTitle}} -
        <router-link :to="href" v-show="text && href">{{text}}</router-link>
    </h2>
</template>

<script>
    /**
     * parameters:
     *      backColor    背景颜色
     *      sectionTitle 标题内容
     *      skip         右侧小tips   可选
     *          type : object
     *              -href 跳转链接
     *              -text 文字
     *
     *   ----------------------------------
     *  |                                |
     *  |          - 理财精选 -           |
     *  |                                |
     *  ----------------------------------
     *  ----------------------------------
     *  |                                |
     *  |          - 理财精选 -  更多好货> |
     *  |                                |
     *  ----------------------------------
     *
     */
    export default {
        props:['sectionTitle','backColor','skip'],
        data(){
            return {
                text:this.skip.text,
                href:this.skip.href
            }
        },
        created(){
        }
    }
</script>

<style scoped lang="less">
    h2{
        font-size: .14rem;
        text-align: center;
        height: .5rem;
        line-height: .5rem;
        position: relative;
        a{
            position: absolute;
            color: #999;
            font-size: .12rem;
            right: .16rem;
            font-weight: normal;
            &:after{
                content: '>';
                display: inline-block;
                margin-left: 5px;
            }
        }
    }
</style>
