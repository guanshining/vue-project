<template>
    <h2  :style="{'background-color': backColor}">- {{sectionTitle}} -</h2>
</template>

<script>
    /**
     * parameters:
     *      backColor    背景颜色
     *      sectionTitle 标题内容
     *
     *  ----------------------------------
     *  |                                |
     *  |          - 理财精选 -           |
     *  |                                |
     *  ----------------------------------
     *
     */
    export default {
        props:['sectionTitle','backColor']
    }
</script>

<style scoped lang="less">
    h2{
        font-size: .14rem;
        text-align: center;
        height: .5rem;
        line-height: .5rem;
    }
</style>
