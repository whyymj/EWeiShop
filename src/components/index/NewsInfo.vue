<template>
    <div class='news'>
        <page-info theme='新闻资讯' detail='行业动态仅售眼底'>
            <news-item></news-item>
        </page-info>
        <a class='news__more' href="javascript:void(0)">查看更多></a>
    </div>
</template>

<script>
    import pageInfo from '../retail/PageMiddleInfo'
    import newsItem from './NewsInfoItem.vue'
    export default {
        components: {
            pageInfo,
            newsItem
        }
    }
</script>

<style scoped lang='scss'>
    .news {
        width: 100%;
        padding: 0 0 129px;
        position: relative;
        background: #fff;
        .news__more {
            position: absolute;
            height: 129px;
            bottom: 0;
            width: 100%;
            left: 0;
            text-align: center;
            font-size: 24px;
            color: #fb6638;
             padding: 32px 0 0;
             box-sizing: border-box;
             text-decoration: none;
        }
    }
</style>