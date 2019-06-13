<template>
    <div class='join-us'>
        <page-info theme='加入我们' detail=''></page-info>
        <img class='join-us__title-bg' v-lazy="'/static/image/about_us/title-bg.png'" alt="加入我们">
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
                    <img class='join-us__list__item__bg' v-lazy="'/static/image/about_us/join-bg-img.png'" alt="加入我们">
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
                    detail: ['具有良好的编程习惯； 熟悉Javascript，CSS', '熟悉的 Yii , laravel 等 开源框架，有快速开发经验', '熟悉XML、HTML/XHTML、CSS、Javascript、AJAX、JSON、JQuery等Web页面技术'],
                    others: [
                        '为了更加全面地了解您，建议您再附件中加上您的个人作品，简历及作品请发送至邮箱：hr@elinkint.com',
                        '邮件标题注明：“姓名+应聘岗位+手机号码”'
                    ]
                }, {
                    title: '软件测试工程师',
                    detail: ['1年以上测试相关工作经验熟悉测试基本流程', '熟悉各测试阶段工作内容及可使用的测试工具；能独立编制测试计划、方案和用例'],
                    others: [
                        '为了更加全面地了解您，建议您再附件中加上您的个人作品，简历及作品请发送至邮箱：hr@elinkint.com',
                        '邮件标题注明：“姓名+应聘岗位+手机号码”'
                    ]
                }, {
                    title: 'WEB前端工程师',
                    detail: ['两年以上Web前端开发经验', '熟练运用JavaScript语言与HTML5、CSS3等技术', '熟悉移动端Web绘图相关高级特性', '4. 熟悉模块化、前端编译和构建工具，精通一种以上目前主流框架，如 Jquery、Zepto、AgularJs、React、Vue.js等主流js框架开发'],
                    others: [
                        '为了更加全面地了解您，建议您再附件中加上您的个人作品，简历及作品请发送至邮箱：hr@elinkint.com',
                        '邮件标题注明：“姓名+应聘岗位+手机号码”'
                    ]
                }]
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
            box-shadow: 0 0 0 3px rgba(251, 102, 56, .5); /*no*/
        }
    }
    .join-us {
        width: 100%;
        background: #fff;
        position: relative;
        >.join-us__title-bg {
            width: 142px;
            display: block;
            margin: -6px auto 0;
        }
        >.join-us__box {
            width: 100%;
            overflow: auto;
            -webkit-overflow-scrolling: touch;
            >.join-us__list {
                width: fit-content; // overflow: hidden;
                box-sizing: border-box;
                display: flex;
                justify-content: flex-start;
                padding: 0 28px;
                box-sizing: border-box;
                >.join-us__list__item {
                    width: 620px;
                    height: 752px;
                    border-radius: 10px;
                    position: relative;
                    margin: 50px 12px 70px;
                    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
                    box-sizing: border-box;
                    &:before {
                        position: absolute;
                        content: '';
                        width: 36px;
                        height: 4px;
                        background: #fb6638;
                        top: 118px;
                        left: 70px;
                    }
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
                        padding: 153px 40px 0 68px;
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
                                width: 6px; /*no*/
                                height: 6px; /*no*/
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
                        padding: 0 46px 0 58px;
                        text-align: left;
                        >span {
                            width: 120%;
                            display: inline-block;
                            color: #9c9eae;
                            font-size: 24px;
                            transform: scale(.84);
                            line-height: 46px;
                            margin: 0 0 20px -40px;
                        }
                    }
                    >.join-us__list__item__bg{
                        width:164px;
                        position: absolute;
                        bottom:30px;
                        right:40px;
                        z-index:2001;
                    }
                }
            }
        }
    }
</style>