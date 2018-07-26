<template>
    <div>
        <div class="swiperBox">
            <Swiper :slides="slides"></Swiper>
        </div>
        <div>
            <Nav :nav="nav" :backColor="backColor"></Nav>
        </div>
        <div>
            <H2Title :sectionTitle="sectionTitle" :backColor="backColor"></H2Title>
        </div>
        <div>
            <TextSection :textSection="textSection" :backColor="backColor"></TextSection>
        </div>
    </div>
</template>

<script>
    import Swiper from '../base/Swiper.vue';
    import Nav from '../base/Nav.vue';
    import H2Title from '../base/H2Title.vue';
    import TextSection from '../base/TextSection.vue';
    export default {
        name: "Index",
        components:{
            Swiper,
            Nav,
            H2Title,
            TextSection
        },
        data(){
            return{
                slides:[
                    'https://m.360buyimg.com/mobilecms/s1125x549_jfs/t11578/40/1816587279/47894/42dba539/5a0d36f7N149b127f.jpg!q70.jpg',
                    'https://img1.360buyimg.com/da/jfs/t14110/207/712950073/377098/a23521b1/5a129386N7f39c763.jpg',
                    'https://img1.360buyimg.com/da/jfs/t13657/160/507550199/94542/6e62a404/5a0d3658Nce159095.jpg'
                ],
                nav:[
                    {
                        icon:'https://img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
                        text:'优惠券',
                        href:'https://www.jd.com'
                    },
                    {
                        icon:'https://img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
                        text:'领福利',
                        href:'https://www.baidu.com'
                    },
                    {
                        icon:'https://img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
                        text:'抢钢镚',
                        href:'https://www.zhihu.com'
                    },
                    {
                        icon:'https://img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
                        text:'白条提额',
                        href:'https://www.taobao.com'
                    },
                ],
                backColor:'white',
                sectionTitle:'理财精选',
                textSection:[
                    {
                        'title':'京渤随享盈',
                        'content':'5.50%',
                        'describe':'历史年化收益率',
                        'tips':'90天可质押',
                        'id':1
                    },
                    {
                        'title':'年年盈',
                        'content':'4.94%',
                        'describe':'历史年化收益率',
                        'tips':'90天可质押',
                        id:'2'
                    },
                    {
                        'title':'建信养老飞益鑫',
                        'content':'4.57%',
                        'describe':'近7日年化率',
                        'tips':'100起投',
                        'id':3
                    },
                    {
                        'title':'小白基金',
                        'content':'4.5%',
                        'describe':'近7日年化率',
                        'tips':'超短期',
                        'id':4
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
.swiperBox{
    height: 1.6rem;
}
</style>