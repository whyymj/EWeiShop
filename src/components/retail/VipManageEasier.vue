<template>
    <div class='vip-manage-easier'>
        <swipe :autoplay="3000" style='height:100%;' indicator-color="white" @change="onChange">
            <swipe-item class='vip-manage-easier__swipe-item'>
                <page-info theme='会员管理更便捷' :detail-style='detailLeftAlign' detail='会员信息一目了然，会员消费标签支持自动生成定制专属会员营销方案'></page-info>
                <img class='vip-manage-easier__img' src="@/assets/image/new-retail/img_4.png" alt="">
            </swipe-item>
            <swipe-item class='vip-manage-easier__swipe-item'>
                <page-info theme='会员管理更便捷' :detail-style='detailLeftAlign' detail='会员信息一目了然，会员消费标签支持自动生成定制专属会员营销方案'></page-info>
                <img class='vip-manage-easier__img' src="@/assets/image/new-retail/img_4.png" alt="">
            </swipe-item>
            <div class="custom-indicator" slot="indicator">
                <span class="point point1" :class='{"active-point":current==0}'></span>
                <span class="point point2" :class='{"active-point":current==1}'></span>
            </div>
        </swipe>
    </div>
</template>

<script>
    import {
        Swipe,
        SwipeItem
    } from 'vant';
    import pageInfo from './PageMiddleInfo'
    export default {
        data() {
            return {
                current: 0,
                detailLeftAlign: {
                    textAlign: 'left'
                }
            }
        },
        methods: {
            onChange(index) { 
                this.current = index;
            }
        },
        components: {
            pageInfo,
            Swipe,
            SwipeItem
        }
    }
</script>

<style scoped lang='scss'>
    .vip-manage-easier {
        background: #fff;
        overflow: hidden; // position: absolute;
        float: left;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        width: 100%;
        margin-top: -10px;
        position: relative;
        height: 812px;
        .vip-manage-easier__img {
            width: 470px;
            display: block;
            margin: 70px auto 0;
            overflow: hidden;
        }
        .custom-indicator {
            width: 120px;
            position: absolute;
            bottom: 72px;
            left: 0;
            right: 0;
            margin: auto;
            >.point {
                width: 48px;
                height: 6px;
                border-radius: 3px;
                background: #ddd;
                float: left;
            }
            >.point2 {
                float: right;
            }
            >.active-point{
                 background: #4c84ff;
            }
        }
    }
</style>