<template>
    <div class='painer'>
        <page-info theme='解决三大拼团活动通痛点' detail=' '>
            <ul class='painer-list'>
                <li class='painer-list__item' v-for='(item,index) in list' :key='index'>
                    <img v-lazy="item.img" :alt="item.detail">
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
                    img: '/static/image/assemble/pain1.png',
                    detail: '推广传播难'
                }, {
                    img: '/static/image/assemble/pain2.png',
                    detail: '宣传成本高'
                }, {
                    img: '/static/image/assemble/pain3.png',
                    detail: '订单转化少'
                }]
            }
        },
    }
</script>

<style scoped lang='scss'>
    .painer {
        position: relative;
        width: 100%;
        overflow: hidden;
        background-color: #fafafa;
        margin:30px 0 70px;
        .painer-list {
            display: flex;
            margin-top:60px;
            justify-content: center;
            >.painer-list__item {
                width: 211px;
                height: 211px;
                border-radius: 6px;
                overflow: hidden;
                position: relative;
                margin: 0 9px;
                >img {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
                >span {
                    position: absolute;
                    top: 148px;
                    left: 0;
                    right: 0;
                    font-size: 24px;
                    color: #fff;
                    text-align: center;
                }
            }
        }
    }
</style>