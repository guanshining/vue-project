<template>
    <div :style="{'background-color': backColor}">
        <router-link tag="div" class="item" v-for="item in textSection" to="#">
            <p class="title">
                <span>{{item.title}}</span>
                <label>{{item.tips}}</label>
            </p>
            <p class="value">{{item.content}}</p>
            <p class="desc">{{item.describe}}</p>
        </router-link>
        <br style="clear: both" />
    </div>
</template>

<script>
    export default {
        props:['textSection','backColor']
    }
</script>

<style scoped lang="less">
    .item{
        width: 50%;
        padding-left: .16rem;
        height: 1rem;
        box-sizing: border-box;
        float: left;
        position: relative;
        border-bottom:1px solid #f1efef;
        &:nth-child(even){
            border-left:1px solid #f1efef;
        }
        .title{
            font-family: PingFangSC-Medium;
            color: #333;
            height: .2rem;
            line-height: .2rem;
            box-sizing: border-box;
            margin: 17px 0 8px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            span{
                color: #333;
                font-weight: 700;
                font-size: .15rem;
                display: block;
                float: left;
                height: .2rem;
                line-height: .2rem;
            }
            label{
                height: 17px;
                line-height: 17px;
                font-size: 11px;
                padding: 0 4px;
                color: #FF5155;
                float: left;
                position: relative;
                top: 1.5px;
                left: 4px;
                text-align: center;
                &:before{
                    min-width: 52px;
                    line-height: 17px;
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 200%;
                    height: 200%;
                    display: block;
                    -webkit-transform: scale(.5,.5);
                    -ms-transform: scale(.5,.5);
                    transform: scale(.5,.5);
                    -webkit-transform-origin: 0 0;
                    transform-origin: 0 0;
                    box-sizing: border-box;
                    border: 1px solid #FF5155;
                }
            }
        }
        .value{
            font-weight: 700;
            font-size: .2rem;
            height: .29rem;
            line-height: .29rem;
            color: #FF5155;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
        .desc{
            font-size: 12px;
            height: .17rem;
            line-height: .17rem;
            color: #999;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
</style>