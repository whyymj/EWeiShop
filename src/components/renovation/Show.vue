<template>
    <div class='show'>
        <page-info theme='优秀设计师装修模板覆盖全行业' detail=''>
           <swipe></swipe>
        </page-info>
    </div>
</template>

<script>
    import pageInfo from '../retail/PageMiddleInfo'
    import swipe from './ShowSwiper.vue'
    export default {
        components: {
            pageInfo,
            swipe
        },
        
    }
</script>

<style scoped lang='scss'>
    .show {
        position: relative;
        width: 100%;
        overflow: hidden;
        background-color: #fff;
        padding-bottom: 70px;
        .show-bgimg {
            display: block;
            margin:50px auto;
            width: 445px; 

        }
    }
</style>