<template>
    <div class='one-stop-service'>
        <page-info theme='一站式电商服务' detail='让您轻松进军新零售社交电商'>
            <ul class='one-stop-service__list'>
                <li v-for='(item,index) in list' :key='index'>
                    <img v-lazy="item.img" :alt="item.detail">
                    <h6>{{item.title}}</h6>
                    <span>{{item.detail}}</span>
                </li>
            </ul>
        </page-info>
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
                list: [{
                    img: '/static/image/index/one_step-1.png',
                    title: '我们的优势',
                    detail: '支持个性化定制开发，近4年移动电商开发经验'
                }, {
                    img: '/static/image/index/one_step-2.png',
                    title: '我们的服务',
                    detail: '以用户为中心，为您提供有针对性的电商解决方案'
                }, {
                    img: '/static/image/index/one_step-3.png',
                    title: '我们的特色',
                    detail: '采用最新的研发技术，确保用户体验更流畅稳定'
                }]
            }
        },
    }
</script>

<style scoped lang='scss'>
    .one-stop-service {
        height: 704px;
        width: 100%;
        position: relative;
        .one-stop-service__list {
            width: 100%;
            margin-top: 66px;
            >li {
                width: 618px;
                margin: 0 auto 70px;
                position: relative;
                padding: 0 0 0 108px;
                box-sizing: border-box;
                min-height: 86px;
                >img {
                    position: absolute;
                    width: 86px;
                    height: 86px;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                    left: 0;
                }
                >h6 {
                    font-size: 30px;
                    font-weight: 400;
                    position: absolute;
                    top: 0;
                    left: 108px;
                }
                >span {
                    position: absolute;
                    bottom: 0;
                    left: 108px;
                    font-size: 24px;
                    font-weight: 400;
                    color:#7e8a96;
                    line-height: 30px;
                    word-wrap: nowrap;
                    white-space: nowrap;
                }
            }
        }
    }
</style>