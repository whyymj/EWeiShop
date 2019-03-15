<template>
    <div class='news'>
        <news-nav></news-nav>
        <news-list></news-list>
    </div>
</template>

<script>
    import newsNav from '../components/news/NewsNav'
    import newsList from '../components/news/NewsInfoList.vue'
    export default {
        metaInfo: {
            title: '新闻中心_掌握最新电商行业动态', // set a title
            meta: [{ // set meta
                name: 'keywords',
                content: '新零售，社交电商，分销商城，EWEISHOP，微信商城，微信小程序，微信小程序商城，微信商城管理，三级分销，千人千面'
            }, {
                name: "description",
                content: 'EWEISHOP新零售社交分销商城，一站式社交电商解决方案，多渠道营销，融合线上线下打造健康闭合的电商生态圈，新零售电商'
            }]
        },
        components: {
            newsNav,
            newsList
        }
    }
</script>

<style scoped>

</style>