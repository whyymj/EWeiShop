<template>
    <div class='service'>
        <img class='service__bg' v-lazy="'/static/image/index/fangan2.png'" :alt="'QQ：'+curServer.qq">
        <div class="service__box">
            <h6 class="service__box__item service__box__name">客户经理：{{curServer.name}}</h6>
            <p class="service__box__item service__box__qq"><img src="../assets/image/customer/icon-qq.png" alt="QQ：102354254"><a id='QQ' :href='curServer.qqHref'>{{curServer.qq}}</a></p>
            <span class="service__box__item service__box__wx">微信咨询</span>
            <img class="service__box__item service__box__qr" :src="curServer.wxQR" alt="微信二维码">
            <span class="service__box__item service__box__tel">服务热线</span>
            <a class="service__box__item service__box__num" :href='"tel:"+curServer.tel'>{{curServer.tel}}</a>
        </div>
        <span class="service__info">青岛易联互动网络科技有限公司版权所有<br/>©2016-2018鲁ICP备18044507号</span>
    </div>
</template>

<script>
    export default {
        metaInfo: {
            title: '产品中心_秒杀_快速聚焦促进订单达成', // set a title
            meta: [{ // set meta
                name: 'keywords',
                content: '新零售，社交电商，分销商城，EWEISHOP，微信商城，微信小程序，微信小程序商城，微信商城管理，三级分销，千人千面'
            }, {
                name: "description",
                content: 'EWEISHOP新零售社交分销商城，一站式社交电商解决方案，多渠道营销，融合线上线下打造健康闭合的电商生态圈，新零售电商'
            }]
        },
        data() {
            return {
                curServer: {
                    name: '',
                    qq: '',
                    qqHref: "",
                    wxQR: '',
                    tel: ''
                }
            }
        },
        methods: {
            random() {
                return Math.floor(Math.random() * 4);
            }
        },
        beforeMount() {
            this.$axios.get('https://wiki.ewei.shop/api/customer/get').then(res => { 
                let data = res.data.customer;
                this.curServer = {
                    name: data.name,
                    qq: data.qq,
                    qqHref: "http://wpa.qq.com/msgrd?v=3&uin=" + data.qq + "&site=qq&menu=yes",
                    wxQR: data.headimg,
                    tel: data.mobile
                }
            })
        }
    }
</script>

<style scoped lang='scss'>
    .service {
        width: 100%;
        min-height: 1200px;
        position: relative;
        background: #feffff;
        border-top: 1px solid rgba(245, 245, 245, 1);
        overflow: hidden;
        >.service__box {
            position: absolute;
            background: #fff;
            width: 600px;
            height: 972px;
            box-shadow: rgba(7, 88, 188, .1) 0 5px 32px;
            left: 0%;
            right: 0;
            margin: auto;
            top: 64px;
            display: flex;
            flex-wrap: wrap;
            >.service__box__item {
                width: 100%;
                text-align: center;
                position: absolute;
                left: 0;
                right: 0;
                margin: auto;
            }
            >.service__box__name {
                font-size: 32px;
                top: 96px;
                color: #3b426b;
                font-weight: 600;
            }
            >.service__box__qq {
                width: 300px;
                height: 98px;
                line-height: 98px;
                border-top: 1px solid #eee;/*no*/
                border-bottom: 1px solid #eee;/*no*/
                display: flex;
                justify-content: center;
                top: 191px;
                >img {
                    width: 28px;
                    height: 30px;
                    margin: 33px 18px 0 0;
                }
                >a {
                    text-decoration: none;
                    font-size: 28px;
                    line-height: 30px;
                    color: #333;
                    margin: 33px 0 0 0;
                }
            }
            >.service__box__wx,
            >.service__box__tel {
                font-size: 28px;
                color: #333;
                top: 353px;
                line-height: 28px;
            }
            >.service__box__qr {
                width: 260px;
                height: 260px;
                top: 411px;
            }
            >.service__box__tel {
                top: 779px;
                &:before {
                    position: absolute;
                    content: '';
                    width: 300px;
                    height: 0;
                    border-top: 1px solid #eee;
                    left: 0;
                    right: 0;
                    margin: auto;
                    top: -40px;
                }
            }
            >.service__box__num {
                font-size: 28px;
                color: #fb6638;
                bottom: 106px;
                z-index: 1001;
            }
        }
        >.service__info {
            text-align: center;
            color: #afbad2;
            line-height: 38px;
            position: absolute;
            bottom: 50px;
            width: 100%;
            left: 0;
            font-size: 24px;
            transform: scale(.84);
        }
        >.service__bg,
        &:before {
            position: absolute;
            width: 500px;
            height: 550px;
            opacity: 0.04;
            bottom: -250px;
            right: -110px;
            z-index: 1000;
        }
        &:before {
            top: -350px;
            left: -250px;
            width: 600px;
            border-radius: 50%;
            background: #fb6638;
            content: '';
        }
    }
</style>