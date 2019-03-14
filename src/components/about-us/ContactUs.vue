<template>
    <div class='contact-us'>
        <h2>青岛易联互动网络科技有限公司</h2>
        <p class='contact-us__addr'>
            <img class='contact-us__addr__icon' v-lazy="'/static/image/about_us/position.png'" alt="地址">
            <span class="contact-us__addr__label">地址：</span>
            <span class="contact-us__addr__adds">青岛市市北区龙城路31号卓越世纪中心4号楼21F</span>
        </p>
        <p class='contact-us__tel'>
            <img class='contact-us__tel__icon' v-lazy="'/static/image/about_us/phone.png'" alt="电话">
            <span class="contact-us__tel__label">电话：</span>
            <span class="contact-us__tel__tels">
                                <i>158-6554-6761</i>
                                <i>186-6026-3082</i>
                                <i>185-6137-9620</i>
                       </span>
        </p>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped lang='scss'>
    .contact-us {
        width: 100%;
        position: relative;
        height: 316px;
        background: #fff;
        >h2 {
            position: absolute;
            top: 60px;
            left: 40px;
            font-size: 30px;
            font-weight: 500;
            line-height: 30px;
            color: #fb6638;
        }
        >p {
            position: absolute;
            left: 40px;
            right: 40px;
            font-size: 24px;
            font-weight: 400;
            line-height: 24px;
            color: #7b88a2;
            display: flex;
            flex-wrap: nowrap;
            >img {
                width: 24px;
                height: 24px;
                position: relative;
                margin: 0 10px 0 0;
            }
            >.contact-us__addr__label,
            >.contact-us__tel__label {
                margin: 0 10px 0 0;
                word-wrap: none;
            white-space: nowrap;
            }
            >.contact-us__tel__tels{
                display: flex;
                flex-wrap: wrap;
                >i{
                    font-style: normal;
                    margin:0 66px 24px 0;
                }
            }
        }
        >.contact-us__addr {
            top: 129px;
        }
        >.contact-us__tel {
            top: 190px;
        }
    }
</style>