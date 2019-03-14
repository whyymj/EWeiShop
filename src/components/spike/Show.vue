<template>
    <div class='show'>
        <page-info theme='秒杀页面展示' :detail-style='detailStyle' detail=''>
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
        data() {
            return {
                detailStyle: {
                    textAlign: 'left',
                    width:'81%'
                }
            }
        },
    }
</script>

<style scoped lang='scss'>
    .show {
        position: relative;
        width: 100%;
        overflow: hidden;
        background-color: #fff;
        .show-bgimg {
            display: block;
            margin:50px auto;
            width: 445px; 

        }
    }
</style>