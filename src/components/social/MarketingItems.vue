<template>
    <div class='wake'>
        <page-info theme='基于社交圈低成本裂变营销'  detail='社交场景与营销活动结合实现大爆炸式传播'>
            <img class='wake-bgimg' v-lazy='"/static/image/social_bussiness/img-2.png"' alt="社交场景与营销活动结合实现大爆炸式传播">
        </page-info>
    </div>
</template>

<script>
    import pageInfo from '../retail/PageMiddleInfo'
    export default {
        components: {
            pageInfo
        },
    }
</script>

<style scoped lang='scss'>
    .wake {
        position: relative;
        width: 100%;
        height: 700px;
        overflow: hidden;
        background-color: #fff;
        .wake-bgimg {
            display: block;
            margin:50px auto;
            width: 670px; 

        }
    }
</style>