<template>
    <div class='map'>
        <img class='map__bg' v-lazy="'/static/image/about_us/map.png'" alt="">
    </div>
</template>

<script>
    export default {
    }
</script>


<style scoped lang='scss'>
    .map {
        width: 100%;
        overflow: hidden;
        >.map__bg{
            width:100%;
            float: left;
        }
    }
</style>