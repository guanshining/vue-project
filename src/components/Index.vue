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
        <div class="section-newShop">
            <H2Title :sectionTitle="sectionTitle2" :backColor="backColor" :skip="skip"></H2Title>
            <div class="shopModule-wrap">
                <div class="shopModule-scroll" ref="myScroll">
                    <div v-for="item in shopModule" class="shopModule-item">
                        <ShopModule :shopModule="item"></ShopModule>
                    </div>
                    <br style="clear: both;">
                </div>
            </div>
        </div>
        <div class="insurance">
            <H2Title :sectionTitle="sectionTitle3" :backColor="backColor"></H2Title>
            <div class="insuranceWrap">
                <div class="insuranceBox" ref="insuranceWrap">
                    <router-link tag="li" class="insuranceWrap-item" v-for="item in insurance" :to="item.href">
                        <img :src="item.img" alt="">
                    </router-link>
                </div>
            </div>
        </div>
        <div class="manyAndCar">
            <H2Title :sectionTitle="sectionTitle4" :backColor="backColor"></H2Title>
            <router-link tag="li" class="manyAndCar-item" v-for="item in manyAndCar" :to="item.href">
                <img :src="item.img" alt="">
            </router-link>
            <br style="clear: both;">
        </div>
        <div class="footNav">
            <Nav :nav="footNav" :backColor="backColor"></Nav>
        </div>
    </div>
</template>

<script>
    import Swiper from '../base/Swiper.vue';
    import Nav from '../base/Nav.vue';
    import H2Title from '../base/H2Title.vue';
    import TextSection from '../base/TextSection.vue';
    import ShopModule from '../base/ShopModule.vue';
    export default {
        name: "Index",
        components:{
            Swiper,
            Nav,
            H2Title,
            TextSection,
            ShopModule
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
                sectionTitle2:'众筹新品',
                sectionTitle3:'保险保障',
                sectionTitle4:'有钱有车',
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
                ],
                skip:{
                    'text':'更多尖货',
                    'href':'/vip'
                },
                shopModule:[
                    {
                        'img':'https://img11.360buyimg.com/mobilecms/s280x280_jfs/t4843/261/711274114/224176/10cb1af1/58e736ddNc1181853.jpg!q90.webp',
                        'title':'法国进口红酒',
                        'skMoney':'458.00',
                        'priceOrigin':'888.00',
                        'href':'/vip'
                    },
                    {
                        'img':'https://img10.360buyimg.com/mobilecms/s280x280_jfs/t20029/62/570986436/272562/1f3b66fe/5afd3d77N426b7b3b.jpg!q90.webp',
                        'title':'惠普电脑',
                        'skMoney':'4500.00',
                        'priceOrigin':'7998.00',
                        'href':'/vip'
                    },
                    {
                        'img':'https://img11.360buyimg.com/mobilecms/s280x280_jfs/t4843/261/711274114/224176/10cb1af1/58e736ddNc1181853.jpg!q90.webp',
                        'title':'法国进口红酒',
                        'skMoney':'458.00',
                        'priceOrigin':'888.00',
                        'href':'/vip'
                    },
                    {
                        'img':'https://img20.360buyimg.com/mobilecms/s280x280_jfs/t20401/236/194635593/326774/2e0cd2ed/5b027ba3N1088d700.jpg!q90.webp',
                        'title':'车厘子',
                        'skMoney':'32.00',
                        'priceOrigin':'55.00',
                        'href':'/vip'
                    },
                    {
                        'img':'//img20.360buyimg.com/mobilecms/s280x280_jfs/t22231/152/566903194/328982/7846d410/5b10bea0N6d191b2f.jpg!q90.webp',
                        'title':'大屏电视',
                        'skMoney':'388.00',
                        'priceOrigin':'999.00',
                        'href':'/vip'
                    },
                    {
                        'img':'//img11.360buyimg.com/mobilecms/s280x280_jfs/t3898/22/2214103155/178188/6fc209e9/58a55999N2b3821f7.jpg!q90.webp',
                        'title':'超级好喝到哭的香蕉牛奶',
                        'skMoney':'100.00',
                        'priceOrigin':'188.00',
                        'href':'/vip'
                    },
                ],
                insurance:[
                    {
                        'img':'https://img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260',
                        'href':'/vip'
                    },
                    {
                        'img':'https://img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&height=260',
                        'href':'/vip'
                    },
                    {
                        'img':'https://img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260',
                        'href':'/vip'
                    },
                    {
                        'img':'https://img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260',
                        'href':'/vip'
                    },
                    {
                        'img':'https://img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260',
                        'href':'/vip'
                    }
                ],
                manyAndCar:[
                    {
                        'img':'https://img12.360buyimg.com/jrpmobile/jfs/t21313/185/2258216290/21671/8d0704dc/5b4c0d0fN9ef24eb3.png?width=375&height=233',
                        'href':'/vip'
                    },
                    {
                        'img':'https://img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233',
                        'href':'/vip'
                    }
                ],
                footNav:[
                    {
                        icon:'https://img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90',
                        text:'旅游',
                        href:'https://www.jd.com'
                    },
                    {
                        icon:'https://img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90',
                        text:'医美',
                        href:'https://www.baidu.com'
                    },
                    {
                        icon:'https://img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88',
                        text:'房抵贷',
                        href:'https://www.zhihu.com'
                    },
                    {
                        icon:'https://img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90',
                        text:'驾校',
                        href:'https://www.taobao.com'
                    },
                    {
                        icon:'https://img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88',
                        text:'分期用',
                        href:'https://www.taobao.com'
                    },
                ],
            }
        },
        mounted(){
            this.$refs.myScroll.style.width = this.shopModule.length * 196 + 'px';
            this.$refs.insuranceWrap.style.width = this.insurance.length * 160 + 'px';
        }
    }
</script>

<style scoped lang="less">
.swiperBox{
    height: 1.6rem;
}
    .section-newShop{
        margin: .2rem 0;
        padding-bottom: .1rem;
        background: white;
        .shopModule-wrap{
            width: 100%;
            overflow-x: scroll;
            .shopModule-scroll{
                .shopModule-item{
                    float: left;
                    margin-right: .1rem;
                    white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
                }
            }
        }
    }
    .insurance{
        width: 100%;
        background: white;
        .insuranceWrap{
            overflow-x: scroll;
            overflow-y: hidden;
            .insuranceWrap-item{
                float: left;
                width: 1.25rem;
                height: 1.54rem;
                margin-right: .1rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    .manyAndCar{
        background: white;
        li{
            width: 50%;
            height: 1.16rem;
            float: left;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
</style>