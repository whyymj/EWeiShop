<template>
    <div style='height:2rem;width:17rem;margin:0.4rem auto 0;'>
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>I'm Slide 1</swiper-slide>
            <swiper-slide>I'm Slide 2</swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>
            <swiper-slide>I'm Slide 4</swiper-slide>
            <swiper-slide>I'm Slide 5</swiper-slide>
            <swiper-slide>I'm Slide 6</swiper-slide>
            <swiper-slide>I'm Slide 7</swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>
        <Button type="danger">111</Button>
        <Cell>555</Cell>
    </div>
</template>

<script>
    import {
        Button,
        Cell
    } from 'vant';
    export default {
        components: {
            Button,
            Cell
        },
        data() {
            return {
                active: 0,
                swiperOption: {
                    slidesPerView: 1 || 'auto',
                    notNextTick: true,
                    // swiper configs 所有的配置同swiper官方api配置
                    autoplay: 3000,
                    resistanceRatio: 0,
                    // slideToClickedSlide: true,
                    // direction : 'vertical',
                    // effect: "coverflow",
                    loop: true,
                    initialSlide: 0,
                    grabCursor: true,
                    setWrapperSize: true,
                    spaceBetween: 0,
                    centeredSlides: false,
                    // autoHeight: true,
                    // paginationType:"bullets",
                    paginationClickable: true,
                    scrollbar: '.swiper-scrollbar',
                    mousewheelControl: true,
                    observeParents: true,
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
            this.swiper.slideTo(3, 1000, false)
        }
    }
</script>

<style scoped>

</style>