<template>
    <div class='brief-bg'>
        <img class='brief__bgImg' v-lazy="'/static/image/index/banner350.png'" alt="">
    </div>
</template>

<script>
    export default {
        props: {
            
        }
    }
</script>

<style scoped lang='scss'>
    .brief-bg {
        width: 100%;
        height: 350px;
        position: relative;
        overflow: hidden;
        >.brief__bgImg{
            width: 100%;
        }
        
    }
</style>