<template>
    <div class='examples'>
        <page-info theme='典型分销案例' detail=''>
            <ul class='examples-list'>
                <li class='examples-list__item' v-for='(item,index) in list' :key='index'>
                    <img v-lazy="item.img" :alt="item.alt">
                </li>
            </ul>
        </page-info>
    </div>
</template>

<script>
    import pageInfo from '../retail/PageMiddleInfo'
    export default {
        components: {
            pageInfo
        },
        data() {
            return {
                list: [{
                    img: '/static/image/distribution_scheme/exmp1.jpg',
                    alt: '花点时间'
                }, 
                {
                    img: '/static/image/distribution_scheme/exmp2.jpg',
                    alt: '每日优鲜'
                }, {
                    img: '/static/image/distribution_scheme/exmp3.jpg',
                    alt: '淑女屋'
                }, 
                {
                    img: '/static/image/distribution_scheme/exmp4.jpg',
                    alt: '蒙牛'
                }, {
                    img: '/static/image/distribution_scheme/exmp5.jpg',
                    alt: '中粮'
                }, {
                    img: '/static/image/distribution_scheme/exmp7.jpg',
                    alt: '老板'
                }, {
                    img: '/static/image/distribution_scheme/exmp8.jpg',
                    alt: '切糕王子'
                }, ]
            }
        },
    }
</script>

<style scoped lang='scss'>
    .examples {
        width: 100%;
        height: 605px;
        background: #fafafa;
        .examples-list {
            margin-top: 60px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
            padding: 0 0 0 24px;
            >.examples-list__item {
                width: 176px;
                height: 176px;
                position: relative;
                border: 1px solid #fafafa;/*no*/
                box-sizing: border-box;
                overflow: hidden;
                >img {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                }
            }
        }
    }
</style>