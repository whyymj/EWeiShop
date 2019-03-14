<template>
    <div class='join-us'>
        <page-info theme='加入我们' detail=''></page-info>
        <img class='join-us__title-bg' v-lazy="'/static/image/about_us/title-bg.png'" alt="">
        <div class='join-us__box'>
            <ul class='join-us__list'>
                <li class='join-us__list__item' v-for='(item,index) in list' :key='index'>
                    <h4 class='join-us__list__item__title'>{{item.title}}</h4>
                    <ul class='join-us__list__item__list'>
                        <li class='join-us__list__item__list__item' v-for="(val,key) in item.detail" :key="key">
                            {{ val }}
                        </li>
                    </ul>
                    <p class='join-us__list__item__other'>
                        <span v-for="(val,key) in item.others" :key="key">
                                        {{ val }}
                                    </span>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import pageInfo from '../retail/PageMiddleInfo'
    export default {
        components: {
            pageInfo
        },
        data() {
            return {
                detailStyle: {
                    color: '#5d6494'
                },
                list: [{
                    title: 'PHP开发工程师',
                    detail: ['客户至上，规范管理<br/>为客户创造价值', '热情专业高效负责<br/>用心为每一位客户服务全心全', '全心全意服务<br/>为客户排忧解难'],
                    others: [
                        '问哦垃圾房卡京东方看了看见对方卡机看家里咖啡豆看啦罚款撒放', 'akljfh jahdf kja '
                    ]
                }, {
                    title: 'PHP开发工程师',
                    detail: ['客户至上，规范管理<br/>为客户创造价值', '热情专业高效负责<br/>用心为每一位客户服务', '全心全意服务<br/>为客户排忧解难'],
                    others: [
                        '问哦垃圾房卡京东方看了看见对方卡机看家里咖啡豆看啦罚款撒放', 'akljfh jahdf kja '
                    ]
                }, {
                    title: 'PHP开发工程师',
                    detail: ['客户至上，规范管理<br/>为客户创造价值', '热情专业高效负责<br/>用心为每一位客户服务', '全心全意服务<br/>为客户排忧解难'],
                    others: [
                        '问哦垃圾房卡京东方看了看见对方卡机看家里咖啡豆看啦罚款撒放', 'akljfh jahdf kja '
                    ]
                }, {
                    title: 'PHP开发工程师',
                    detail: ['客户至上，规范管理<br/>为客户创造价值', '热情专业高效负责<br/>用心为每一位客户服务', '全心全意服务<br/>为客户排忧解难'],
                    others: [
                        '问哦垃圾房卡京东方看了看见对方卡机看家里咖啡豆看啦罚款撒放', 'akljfh jahdf kja '
                    ]
                }, ]
            }
        },
    }
</script>

<style lang='scss' scoped>
    @keyframes blink {
        0% {
            box-shadow: 0 0 0 0 rgba(251, 102, 56, .5);
        }
        100% {
            box-shadow: 0 0 0 6px rgba(251, 102, 56, .5);
        }
    }
    .join-us {
        width: 100%;
        background: #fff;
        >.join-us__title-bg {
            width: 142px;
            display: block;
            margin: -6px auto 0;
        }
        >.join-us__box {
            width: 100%;
            overflow: auto;
            >.join-us__list {
                width: fit-content;
                overflow: hidden;
                box-sizing: border-box;
                display: flex;
                justify-content: flex-start;
                padding: 0 28px;
                box-sizing: border-box;
                >.join-us__list__item {
                    width: 620px;
                    height: 652px;
                    border-radius: 10px;
                    position: relative;
                    margin: 50px 12px 70px;
                    box-shadow: rgba(115, 186, 192, .2) 0 5px 32px;
                    box-sizing: border-box;
                    >h4 {
                        position: absolute;
                        width: 100%;
                        font-weight: 500;
                        left: 70px;
                        color: #3b426b;
                        top: 64px;
                        font-size: 32px;
                        line-height: 32px;
                    }
                    >.join-us__list__item__list {
                        float: left;
                        width: 100%;
                        box-sizing: border-box;
                        padding: 153px 46px 0 70px;
                        >.join-us__list__item__list__item {
                            width: 100%;
                            font-size: 24px;
                            line-height: 42px;
                            color: #8692a9;
                            margin-bottom: 22px;
                            position: relative;
                            &:after {
                                content: '';
                                position: absolute;
                                width: 12px;
                                height: 12px;
                                border-radius: 50%;
                                top: 14px;
                                left: -32px;
                                background: #fb6638;
                                animation: blink 1s linear infinite alternate;
                            }
                        }
                    }
                    >.join-us__list__item__other {
                        float: left;
                        box-sizing: border-box;
                        width: 100%;
                        padding: 12px 46px 0 70px;
                        text-align: left;
                        >span {
                            width:100%;
                            display: inline-block;
                            color: #9c9eae;
                            font-size: 24px;
                            transform: scale(.84);
                            line-height: 46px;
                            margin:0 0 0 -40px;
                        }
                    }
                }
            }
        }
    }
</style>