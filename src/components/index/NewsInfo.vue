<template>
    <div class='news'>
        <page-info theme='新闻资讯' detail='行业动态仅售眼底'>
            <news-item></news-item>
        </page-info>
        <div class='news__more' @click='toNews'>查看更多<img v-lazy="'/static/image/index/arrow-r.png'" alt=""></div>
    </div>
</template>

<script>
    import pageInfo from '../retail/PageMiddleInfo'
    import newsItem from './NewsInfoItem.vue'
    export default {
        components: {
            pageInfo,
            newsItem
        },
        methods: {
            toNews() {
                this.$router.push({
                    path: '/news/all'
                })
            }
        }
    }
</script>

<style scoped lang='scss'>
    .news {
        width: 100%;
        padding: 0 0 120px;
        position: relative;
        background: #fff;
        .news__more {
            position: absolute;
            height: 120px;
            bottom: 0;
            width: 100%;
            left: 0;
            text-align: center;
            font-size: 24px;
            color: #fb6638;
            padding: 32px 0 0;
            box-sizing: border-box;
            text-decoration: none;
            >img {
                // position: absolute;
                width:11px;
                height:17px; 
                margin:0 0 0 5px; 
            }
        }
    }
</style>