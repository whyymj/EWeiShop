<template>
    <div class='function-show'>
        <page-info theme='功能演示' detail=''>
            <video src="http://ewei.shop/default/img/mp4/video.mp4" class='function-show__video'></video>
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
    .function-show {
        width: 100%;
        background: #fafafa;
        .function-show__video {
            width: 670px;
            display: block;
            margin: 60px auto 0;
        }
    }
</style>