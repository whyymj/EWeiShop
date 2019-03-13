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
        components:{
            newsNav,
            newsList
        }
    }
</script>

<style scoped>

</style>