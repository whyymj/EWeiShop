<template>
    <div class='service-idea'>
        <page-info theme='服务理念' detail=''></page-info>
        <img class='service-idea__title-bg' src="../../assets/image/about_us/title-bg.png" alt="服务理念">
        <ul class='service-idea__list'>
            <li class='service-idea__list__item' v-for='(item,index) in list' :key='index'>
                <img v-lazy="item.img" :alt="item.detail">
                <span v-html='item.detail'></span>
            </li>
        </ul>
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
                    img: '/static/image/about_us/idea-bg-1.png',
                    detail: '客户至上，规范管理<br/>为客户创造价值'
                }, {
                    img: '/static/image/about_us/idea-bg-2.png',
                    detail: '热情专业高效负责<br/>用心为每一位客户服务'
                }, {
                    img: '/static/image/about_us/idea-bg-3.png',
                    detail: '全心全意服务<br/>为客户排忧解难'
                }, {
                    img: '/static/image/about_us/idea-bg-4.png',
                    detail: '一切为了客户<br/>为客户提供更便捷的服务'
                }]
            }
        },
    }
</script>

<style lang='scss' scoped>
    .service-idea {
        width: 100%;
        background: #fafafa;
        >.service-idea__title-bg {
            width: 142px;
            display: block;
            margin: -6px auto 0;
        }
        >.service-idea__list {
            width: 100%;
            overflow: hidden;
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            padding: 0 0 46px 40px;
            margin-top: 50px;
            >.service-idea__list__item {
                width: 323px;
                height: 284px;
                border-radius: 10px;
                position: relative;
                margin: 0 24px 24px 0;
                >img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                >span {
                    position: absolute;
                    width: 100%;
                    text-align: center;
                    font-weight: 500;
                    left: 0;
                    color: #fff;
                    top: 178px;
                    font-size: 24px;
                    line-height: 42px;
                }
            }
        }
    }
</style>