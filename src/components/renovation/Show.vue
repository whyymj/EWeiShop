<template>
    <div class='show' :style='{background:bgColor}'>
        <page-info :theme='theme' :detail='detail'>
            <swipe :img-list='imgList' :pagination-color='paginationColor'></swipe>
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
        props: {
            imgList: {
                type: Array,
                default () {
                    return [{
                        img: '/static/image/renovation/template1.jpg',
                        alt: '门店装修模板',
                        title:''
                    }, {
                        img: '/static/image/renovation/template2.jpg',
                        alt: '门店装修模板',
                        title:''
                    }, {
                        img: '/static/image/renovation/template3.jpg',
                        alt: '门店装修模板',
                        title:''
                    }, {
                        img: '/static/image/renovation/template4.jpg',
                        alt: '门店装修模板',
                        title:''
                    }]
                }
            },
            paginationColor: {
                type: String,
                default: '#49daae'
            },
            theme: {
                type: String,
                default: '优秀设计师装修模板覆盖全行业'
            },
            detail: {
                type: String,
                default: ''
            },
            bgColor:{
                type:String,
                default:'#fff'
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
        padding-bottom: 70px;
        .show-bgimg {
            display: block;
            margin: 50px auto;
            width: 445px;
        }
    }
</style>