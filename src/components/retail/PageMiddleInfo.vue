<template>
    <div class='page-info'>
        <h2 :style='themeStyle'>{{theme}}</h2>
        <h3 :style='detailStyle'>{{detail}}</h3>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            theme: {
                type: String,
                default: '重构人、货、场'
            },
            themeStyle: {
                type: Object,
                default(){
                    return{}
                }
            },
            detail: {
                type: String,
                default: '线上线下联合乏力，全面布局新零售'
            },
            detailStyle: {
                type: Object,
                default(){
                    return{}
                }
            }
        }
    }
</script>

<style scoped lang='scss'>
    .page-info {
        width: 100%;
        position: relative;
        overflow: hidden;
        >h2 {
            margin: 80px auto 14px;
            text-align: center;
            font-size: 34px;
            font-weight: 600;
            line-height: 34px;
            color: #5d6494;
        }
        >h3 {
            width: 598px;
            margin: auto;
            text-align: center;
            font-size: 24px;
            line-height: 42px;
            color: #9c9eae;
            font-weight: 400;
        }
    }
</style>