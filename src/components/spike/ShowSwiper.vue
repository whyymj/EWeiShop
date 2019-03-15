<template>
    <div class='spike--show-swiper-box'>
        <div class='show-swiper'>
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide><img v-lazy='"/static/image/distribution_scheme/group1.png"' alt=""><span>秒杀商品详情</span></swiper-slide>
                <swiper-slide><img v-lazy='"/static/image/distribution_scheme/group2.png"' alt=""><span>秒杀支付成功</span></swiper-slide>
                <swiper-slide><img v-lazy='"/static/image/distribution_scheme/group3.png"' alt=""><span>秒杀商品列表</span></swiper-slide>
            </swiper>
        </div>
        <div class="show-swiper__pagination">
            <span v-for='item in 3' :key='item' class="show-swiper__pagination__item" :class='{"show-swiper__pagination__item--active":item==active+1}'></span>
        </div>
    </div>
</template>

<script>
    import {
        Button,
        Cell
    } from 'vant';
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    export default {
        components: {
            Button,
            Cell,
            swiper,
            swiperSlide
        },
        data() {
            let that = this;
            return {
                active: 0,
                swiperOption: {
                    slidesPerView: 3,
                    notNextTick: true,
                    // swiper configs 所有的配置同swiper官方api配置
                    autoplay: false,
                    resistanceRatio: 0,
                    // slideToClickedSlide: true,
                    // direction : 'vertical',
                    // effect: "coverflow",
                    loop: false,
                    initialSlide: 0,
                    grabCursor: true,
                    setWrapperSize: true,
                    spaceBetween: 0,
                    centeredSlides: true,
                    // autoHeight: true,
                    // paginationType:"bullets",
                    paginationClickable: false,
                    mousewheelControl: true,
                    observeParents: true,
                    on: {
                        slideChangeTransitionStart: function() {
                            that.active = this.activeIndex;
                            that.$emit('activeIndex', this.activeIndex)
                        },
                    },
                    // some swiper options...
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            // this.swiper.slideTo(3, 1000, false)
        }
    }
</script>

<style lang='scss'>
    .spike--show-swiper-box {
        overflow: hidden;
        .show-swiper {
            width: 100%;
            height: 525px;
            margin: 0px 0 36px;
            .swiper-container {
                height: 100%;
                overflow: hidden;
                .swiper-slide {
                    img {
                        width: 100%;
                        height: 400px;
                        margin-top: 60px;
                        transform: scale(0.71);
                        transition: all .5s;
                        opacity: 0.6;
                        border-radius: 5px;
                        // box-shadow: 2px 10px 30px -2px #eee;
                    }
                    span {
                        position: absolute;
                        bottom: 90px;
                        transition: all .5s;
                        opacity: 0.5;
                        left: 0;
                        width: 100%;
                        font-size: 24px;
                        text-align: center;
                        line-height: 24px;
                        transform: scale(.9);
                        color: #5d6494;
                    }
                }
                .swiper-slide-active {
                    img {
                        transform: scale(1.12);
                        opacity: 1;
                    }
                    span {
                        bottom: 0;
                        opacity: 1;
                    }
                }
            }
        }
        >.show-swiper__pagination {
            height: 6px;
            margin: 36px 0 70px;
            position: relative;
            width: 100%;
            text-align: center;
            display: flex;
            justify-content: center;
            >.show-swiper__pagination__item {
                height: 100%;
                width: 48px;
                background: #ddd;
                margin: 0 12px;
                border-radius: 6px;
            }
            >.show-swiper__pagination__item--active {
                background: #f15f51;
            }
        }
    }
</style>