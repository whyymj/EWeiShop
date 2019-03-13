<template>
    <ul class='news-nav'>
        <li class='news-nav__item' v-for='(item,index) in items' :key='index' :class='{"news-nav__item--active":index==curStatus}' @click='checkStatus(index)'>{{item}}</li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                items: ['全部', '产品发布', '最新动态', '更新日志'],
                curStatus: 0
            }
        },
        methods: {
            checkStatus(index) {
                this.curStatus = index;
            }
        }
    }
</script>

<style scoped lang='scss'>
    .news-nav {
        width: 100%;
        height: 88px;
        display: flex;
        padding: 0 0 0 40px;
        box-sizing: border-box;
        .news-nav__item {
            height: 100%;
            line-height: 88px;
            color: #9ba4b7;
            font-size: 24px;
            margin-right: 65px;
            transition: all .3s;
        }
        .news-nav__item--active {
            font-weight: 600;
            color: #fb6638;
            font-size: 36px;
        }
    }
</style>