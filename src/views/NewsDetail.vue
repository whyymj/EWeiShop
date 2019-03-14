<template>
    <div class='new-detail'>
        <others></others>
    </div>
</template>

<script>
    import others from '../components/news-detail/NewsInfoList'
    export default {
        components: {
            others
        }
    }
</script>

<style scoped lang='scss'>
    .new-detail {
        width: 100%;
        background: #fafafa;
    }
</style>