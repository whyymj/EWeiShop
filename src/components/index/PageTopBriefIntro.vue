<template>
    <div class='brief-bg'>
        <swipe :autoplay="3000" style='height:100%;' indicator-color="white" @change="onChange">
            <swipe-item class='vip-manage-easier__swipe-item' v-for="(item,index) in swipeList" :key='index'>
                <div class='brief-bg__word'>
                    <h2>{{item.theme}}</h2>
                    <span>{{item.detail}}</span>
                </div>
                <img v-lazy="item.img" class='brief-bg__img' :alt="item.detail">
            </swipe-item>
            <div class="custom-indicator" slot="indicator">
                <span class="point point1" v-for="(item,index) in swipeList" :key='index' :class='{"active-point":index==current}'></span>
            </div>
        </swipe>
    </div>
</template>

<script>
    import {
        Swipe,
        SwipeItem
    } from 'vant';
    import {
        request
    } from 'http';
    export default {
        components: {
            Swipe,
            SwipeItem
        },
        data() {
            return {
                current: 0,
                detailLeftAlign: {
                    textAlign: 'left'
                },
                swipeList: [{
                    img: '/static/image/index/banner_img.png',
                    theme: '新零售社交分销商城',
                    detail: '整合全渠道资源为您建立闭合的社交电商生态圈'
                }, {
                    img: '/static/image/index/banner_img.png',
                    theme: '新零售社交分销商城',
                    detail: '整合全渠道资源为您建立闭合的社交电商生态圈'
                }, {
                    img: '/static/image/index/banner_img.png',
                    theme: '新零售社交分销商城',
                    detail: '整合全渠道资源为您建立闭合的社交电商生态圈'
                }]
            }
        },
        methods: {
            onChange(index) {
                this.current = index;
            }
        }
    }
</script>

<style scoped lang='scss'>
    .brief-bg {
        width: 100%;
        height: 350px;
        position: relative;
        background: linear-gradient(45deg, #ff654c, #fb6638);
        .brief-bg__word {
            position: absolute;
            width: 340px;
            left: 40px;
            top: 112px;
            color: #fff;
            >h2 {
                font-weight: 600;
                font-size: 36px;
                color: #fff;
                margin-bottom: 40px;
            }
            >span {
                font-size: 24px;
                color: rgba(255, 255, 255, 0.8);
                line-height: 42px;
            }
        }
        .brief-bg__img {
            width: 305px;
            position: absolute;
            top: 50px;
            right: 32px;
        }
        .custom-indicator {
            position: absolute;
            bottom: 24px;
            left: 50%; 
            transform: translate(-50%, 0);
            >.point {
                box-sizing: border-box;
                width: 4px;/*no*/
                height: 4px;/*no*/
                border-radius: 4px;
                float: left;
                margin-right: 6px;
                transition: all 0.3s;
                background: rgba(255, 255, 255, 0.5);
            }
            >.active-point {
                width: 18px;
                background: #ddd;
            }
        }
    }
</style>