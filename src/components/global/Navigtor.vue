<template>
    <div class='navigator'>
        <img src="@/assets/image/global/nav_logo.png" class='navigator__logo' alt="">
        <img src="@/assets/image/global/nav_btn.png" class='navigator__btn' alt="">
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped lang='scss'>
    .navigator {
        width: 100%;
        height: 88px;
        position: relative;
        >.navigator__logo{
            width:255px;
            height:100%;
            display: block;
            position: absolute;
            left:0;right:0;
            margin: auto;
        }
        >.navigator__btn{
            width:48px;
            height:48px;
            position: absolute;
            right:24px;
            top:0;bottom: 0;
            margin:auto;
        }
    }
</style>