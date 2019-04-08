<template>
    <ul class='april-actions-2019'>
        <li class='april-actions-2019__part1'>
            <img v-lazy="pageModels[0]" alt="">
        </li>
        <li class='april-actions-2019__part2'>
            <img v-lazy="pageModels[1]" alt="">
            <div class='april-actions-2019__part2__server' @click='toPage("/customerService")'></div>
            <div class='april-actions-2019__part2__cards'  @click='toPage("/cardScreat")'></div>
        </li>
        <li class='april-actions-2019__part3' @click='toPage("/custormServiceActive")'>
            <img v-lazy="pageModels[2]" alt="">
        </li>
        <li class='april-actions-2019__part4'>
            <img v-lazy="pageModels[3]" alt="">
            <div class='april-actions-2019__part4__part1' @click='toPage("/service")'></div>
        </li>
        <li class='april-actions-2019__part5'>
            <img v-lazy="pageModels[4]" alt="">
            <div class="april-actions-2019__part5__part1" @click='toPage("/cardScreat")'></div>
        </li>
        <li class='april-actions-2019__part6'>
            <img v-lazy="pageModels[5]" alt="">
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                pageModels: [
                    '/static/image/actions/April2019/01.jpg',
                    '/static/image/actions/April2019/02.jpg',
                    '/static/image/actions/April2019/03.jpg',
                    '/static/image/actions/April2019/04.jpg',
                    '/static/image/actions/April2019/05.jpg',
                    '/static/image/actions/April2019/06.jpg'
                ]
            }
        },
        methods:{
            toPage(url){
this.$router.push({
    path:url
})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .april-actions-2019 {
        width: 100%;
        overflow: hidden;
        >li {
            position: relative;
            width: 100%;
            overflow: hidden;
            >img {
                width: 100%;
                float: left;
            }
            >.april-actions-2019__part2__server,
            >.april-actions-2019__part2__cards {
                width: 350px;
                height: 380px;
                position: absolute;
                top: 0;
                cursor: pointer;
            }
            ;
            >.april-actions-2019__part2__server {
                left: 20px;
            }
            >.april-actions-2019__part2__cards {
                right: 20px;
            }
            >.april-actions-2019__part4__part1{
                width:714px;
                height:874px;
                position: absolute;
                bottom:20px;
                left:20px;
            }
            >.april-actions-2019__part5__part1{
                  position: absolute;
                  bottom:20px;
                  left:20px;
                  right:20px;
                  height:550px;
            }
        }
    }
</style>