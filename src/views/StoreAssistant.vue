<template>
    <div class="store-ais">
        <!-- 店铺小助手-->
        <div class="banner">
            <div class="brief-bg__word">
                <h2 class="fadeInUp">店铺助手小程序</h2>
                <span class="fadeInUp">为商家精心打造便捷高效的移动管理工具，随时随地掌握店铺信息，提升运营效率，轻松管理店铺</span>
            </div>
        </div>
        <!-- part1 移动提升-->
        <div class="partOne">
            <h3>移动提升效率 管理实时掌控</h3>
            <ul class="resolution-list">
                <li class="resolution-list__item" v-for='(item,index) in list' :key="index" >
                    <img class="resolution-list__item__icon" v-lazy="item.img" :alt="item.detail">
                    <h6 class="resolution-list__item__title">{{item.title}}</h6>
                    <span class="resolution-list__item__detail" v-html='item.detail'></span>
                </li>
            </ul>
        </div>
        <!-- part2 数据实时监控-->
        <div class="partTwo">
            <h3 class="fadeInUp">数据实时监控</h3>
            <div class="item" v-for='(item,index) in control' :key="index">
                <div class="info">
                    <span>{{item.title}}</span>
                    <p>{{item.text}}</p>
                </div>
            </div>
            <div class="img">
                <img src="/static/image/store_assistant/pic_1.png" alt="">
            </div>
        </div>
        <!-- part3 会员便捷管理-->
        <div class="partTwo partThree">
            <h3>会员便捷管理</h3>
            <div class="item" v-for='(item,index) in memberList' :key="index">
                <div class="info">
                    <span>{{item.title}}</span>
                    <p>{{item.text}}</p>
                </div>
            </div>
            <div class="img">
                <img src="/static/image/store_assistant/pic_2.png" alt="">
            </div>
        </div>
        <!-- part4 商品灵活编辑-->
        <div class="partTwo partFour">
            <h3>商品灵活编辑</h3>
            <div class="item" v-for='(item,index) in commodity' :key="index">
                <div class="info">
                    <span>{{item.title}}</span>
                    <p>{{item.text}}</p>
                </div>
            </div>
            <div class="img">
                <img src="/static/image/store_assistant/pic_3.png" alt="">
            </div>
        </div>
        <!-- part5 订单及速处理-->
        <div class="partTwo partFive">
            <h3>订单及速处理</h3>
            <div class="item" v-for='(item,index) in order' :key="index">
                <div class="info">
                    <span>{{item.title}}</span>
                    <p>{{item.text}}</p>
                </div>
            </div>
            <div class="img">
                <img src="/static/image/store_assistant/pic_4.png" alt="">
            </div>
        </div>
        <!-- part6 权限按需配置 -->
        <div class="partTwo partSix">
            <h3>权限按需配置</h3>
            <div class="item" v-for='(item,index) in limit' :key="index">
                <div class="info">
                    <span>{{item.title}}</span>
                    <p>{{item.text}}</p>
                </div>
            </div>
            <div class="img">
                <img src="/static/image/store_assistant/pic_5.png" alt="">
            </div>
        </div>
        <!-- part7 更多功能 -->
        <div class="assistant-more">
            <h3 class="align">更多功能</h3>
            <div class="flex assiatant-Micon">
                <div class="item">
                    <img src="/static/image/store_assistant/more_1.png" alt="">
                    <h4>自提核销</h4>
                    <i></i>
                    <p>帮助商家快速核销订单，提升收银效率</p>
                </div>
                <div class="item">
                    <img src="/static/image/store_assistant/more_2.png" alt="">
                    <h4>公告查看</h4>
                    <i></i>
                    <p>信息公告查看方便，重要消息不错漏</p>
                </div>
                <div class="item">
                    <img src="/static/image/store_assistant/more_3.png" alt="">
                    <h4>店铺搜索</h4>
                    <i></i>
                    <p>店铺搜索一键即达，轻松找到所需门店</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [{
                    img: '/static/image/store_assistant/01.png',
                    title: '移动办公',
                    detail: '随时随地掌管店铺',
                }, {
                    img: '/static/image/store_assistant/02.png',
                    title: '功能丰富',
                    detail: '店铺运营全面高效'
                }, {
                    img: '/static/image/store_assistant/03.png',
                    title: '便捷操作',
                    detail: '全局交互体验流畅'
                }, {
                    img: '/static/image/store_assistant/04.png',
                    title: '布局清晰',
                    detail: '数据信息直观呈现'
                }, ],
                control: [{
                    title: '移动监控',
                    text: 'BOSS 随时可查看店铺经营情况，居家出差均可管店'
                }, {
                    title: '智能报表',
                    text: '多维汇总自动统计，按成交额、订单数、商品数、付款会员等多个维度汇总销售'
                }, {
                    title: '销售排行',
                    text: '实时查询商品销量排行榜、会员销量排行榜，主动制定运营策略'
                }, {
                    title: '直观图表',
                    text: '曲线图直观展现，销售数据一目了然'
                },],
                memberList: [{
                    title: '资料查询',
                    text: '一键查看会员及分销商信息，同时可进行编辑修改及审核'
                }, {
                    title: '优惠券发放',
                    text: '随时了解会员订单情况，定向发放会员优惠卷，有效提升成交率'
                }, {
                    title: '交易统计',
                    text: '随时查看会员订单列表，了解会员购买情况'
                },],
                commodity: [{
                    title: '商品添加',
                    text: '新增商品，信息录入即刻解决，无需使用电脑也可添加新品'
                }, {
                    title: '商品编辑',
                    text: '实体及虚拟商品上下架、编辑操作，随时完善产品详情，特设定时上架功能'
                }, {
                    title: '商品推广',
                    text: '商品推广一键即达，可直接分享微信好友、生成二维码、复制链接'
                }, {
                    title: '规格修改',
                    text: '添加多规格商品编辑功能，单规格、多规格可切换'
                },],
                order: [{
                    title: '资料查询',
                    text: '实时查看店铺待付款、待发货、待收货、已完成、已关闭全部状态订单'
                }, {
                    title: '订单跟踪',
                    text:'即使处理订单发货、改价，轻松管理订单业务'
                }],
                limit: [{
                    title: '角色管理',
                    text: '不限角色创建数量，赋予不同用户店长、店员等角色的操作权限'
                }, {
                    title: '精细权限',
                    text: '锁定店员的每一项功能的操作权限，全局掌控员工能做什么不能做什么'
                }]
            }
        },
    }
</script>

<style scoped lang='scss'>
    .store-ais {
        h3 {
            line-height: 1;
            font-size: 36px;
            color: #5d6494;
            text-align: center;
        }
        >.banner {
            width: 100%;
            height: 350px;
            position: relative;
            background: url("/static/image/store_assistant/banner-bg.png") no-repeat;
            -webkit-background-size: cover;
            background-size: cover;
            color: #fff;
            >.brief-bg__word {
                position: absolute;
                width: 390px;
                left: 40px;
                top: 79px;
                color: #fff;
                overflow: hidden;
                >h2 {
                    font-weight: 600;
                    font-size: 36px;
                    color: #fff;
                    margin-bottom: 35px;
                }
                >span {
                    font-size: 24px;
                    color: rgba(255, 255, 255, 0.8);
                    line-height: 42px;
                }
            }
        }
        >.partOne {
            padding-top: 80px;
            background-color: #f5f8ff;
            .resolution-list {
                width: 100%;
                margin: 60px 0 0;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                >.resolution-list__item {
                    width: 326px;
                    margin: 0 9px 60px;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    >.resolution-list__item__icon {
                        width: 326px;
                        height: 160px;
                    }
                    >.resolution-list__item__title {
                        width: 100%;
                        font-size: 28px;
                        text-align: center;
                        color: #3b426b;
                        font-weight: 600;
                    }
                    >.resolution-list__item__detail {
                        width: 100%;
                        font-size: 24px;
                        text-align: center;
                        color: #7b88a2;
                    }
                }
            }
        }
        >.partTwo {
            padding-top: 80px;
            padding-bottom: 58px;
            h3 {
                margin-bottom: 58px;
            }
            .img {
                width: 100%;
                height: 100%;
                padding: 0 16px;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
            }
            img {
                display: block;
                width: 100%;
                height: 100%;
            }
            .item {
                position: relative;
                padding: 0 58px 24px 90px;
                font-size: 24px;
                color: #5d6494;
                span {
                    font-weight: 700;
                }
                p {
                    line-height: 42px;
                    color: #7b88a2;
                }
            }
            .item::before {
                content: '';
                position: absolute;
                top: 7px;
                left: 58px;
                width: 22px;
                height: 22px;
                background: url("/static/image/store_assistant/yes.png") no-repeat center center;
                background-size: contain;
            }
        }
        >.partThree {
            background-color: #f5f8ff;
            padding-bottom: 38px;
            .img {
                padding: 0 32px;
            }
        }
        >.partFour {
            padding-bottom: 70px;
            .img {
                padding: 0 10px;
            }
        }
        >.partFive {
            background-color: #f5f8ff;
            padding-bottom: 50px;
            .img {
                padding: 0 43px;
            }
        }
        >.partSix {
            padding-bottom: 54px;
            .img {
                padding: 0 59px;
            }
        }
        .assistant-more {
            padding: 80px 38px 70px;
            background-color: #f5f8ff;
            h3 {
                margin-bottom: 60px;
            }
            .flex {
                display: flex;
            }
            .assiatant-Micon .item {
                width: 33.33%;
                padding-top: 24px;
                padding-bottom: 26px;
                margin-left: 18px;
                background-color: #fff;
                line-height: 1;
                text-align: center;
                font-size: 18px;
                color: #5b6494;
                -webkit-border-radius: 7px;
                -moz-border-radius: 7px;
                border-radius: 7px;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                img {
                    display: block;
                    width: 160px;
                    height: 132px;
                    margin: 0 auto;
                }
                h4 {
                    margin: 12px 0 20px 0;
                    font-weight: 500;
                    font-size: 28px;
                }
                i {
                    display: block;
                    margin: 0 auto 24px;
                    width: 48px;
                    height: 4px;
                    background-color: #017eff;
                    border-radius: 4px;
                }
                p {
                    padding: 0 10px;
                    font-size: 22px;
                    color: #7b88a2;
                    line-height: 32px;
                }
            }
            .assiatant-Micon .item:first-child {
                margin-left: 0;
            }
        }
    }
</style>