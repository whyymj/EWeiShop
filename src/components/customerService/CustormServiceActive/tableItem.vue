<template>
  <div class="tableItem">
     <div class="headerTitle">
        <item-header :itemHeaderTitle="itemHeaderTitle"></item-header>
    </div>
    <div class="table">
        <div class="borderHeader">
            <ul>
                <li class="type">类型</li>
                <li class="ewei">EWEISHOP</li>
                <li class="other">微擎其他</li>
                <li class="other">市场其他</li>
            </ul>
        </div>
        <img v-lazy="'/static/image/customerService/csActive/acprice.png'" alt="" class="conImg">
        <div class="line1">
            <ul>
                <li class="row1">价格</li>
                <li class="img">
                    2999
                </li>
                <li class="other">2500元</li>
                <li class="other">1600元</li>
            </ul>
        </div>
        <div class="line2">
            <ul>
                <li class="row1">规格</li>
                <li class="text">
                    <p class="p1">永久使用</p>
                    <p class="p2">不限坐席</p>
                </li>
                <li class="other">
                    <p class="p1">永久使用</p>
                    <p class="p2">不限坐席</p>
                </li>
                <li class="other">
                    <p class="p1">1年</p>
                    <p class="p2">1坐席</p>
                </li>
            </ul>
        </div>
        <div class="lineBack" style="background-color:#f2f6ff;">
            <ul>
                <li class="title">多渠道接入</li>
                <li class="img1">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/no.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
            </ul>
        </div>
        <div class="lineBack">
             <ul>
                <li class="title">发送各种类型的消息</li>
                <li class="img1">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/no.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
            </ul>
        </div>
        <div class="lineBack" style="background-color:#f2f6ff;">
            <ul>
                <li class="title">自动回复</li>
                <li class="img1">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/no.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
            </ul>
        </div>
         <div class="lineBack">
             <ul>
                <li class="title">快捷语回复</li>
                <li class="img1">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
            </ul>
        </div>
         <div class="lineBack" style="background-color:#f2f6ff;">
             <ul>
                <li class="title">对话转接</li>
                <li class="img1">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
            </ul>
        </div>
        <div class="lineBack" >
            <ul>
                <li class="titleCon">
                   <p>对话内容支持</p>
                   <p>关键词搜索</p>
                </li>
                <li class="img1">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/no.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
            </ul>
        </div>
         <div class="lineBack" style="background-color:#f2f6ff;">
             <ul>
                <li class="title">会话消息同步</li>
                <li class="img1">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/no.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
            </ul>
        </div>
        <div class="lineBack" >
            <ul>
                <li class="title">最近订单</li>
                <li class="img1">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/no.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
            </ul>
        </div>
        
        <div class="lineBack" style="background-color:#f2f6ff;">
            <ul>
                <li class="title">历史会话</li>
                <li class="img1">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
            </ul>
        </div>
         <div class="lineBack">
             <ul>
                <li class="title">超时设置</li>
                <li class="img1">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/no.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/no.png'" alt="" > 
                </li>
            </ul>
        </div>
        <div class="lineBack" style="background-color:#f2f6ff;">
            <ul>
                <li class="title">客服系统设置</li>
                <li class="img1">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/no.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
            </ul>
        </div>
         <div class="lineBack">
             <ul>
                <li class="title">客服关联会员</li>
                <li class="img1">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/no.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
            </ul>
        </div>
        <div class="lineBack" style="background-color:#f2f6ff;">
            <ul>
                <li class="title">星标用户</li>
                <li class="img1">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/no.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
            </ul>
        </div>
         <div class="lineBack">
             <ul>
                <li class="title">手动添加客服</li>
                <li class="img1">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/no.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/no.png'" alt="" > 
                </li>
            </ul>
        </div>
        <div class="lineBack" style="background-color:#f2f6ff;">
            <ul>
                <li class="title">客服管理</li>
                <li class="img1">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/no.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
            </ul>
        </div>
         <div class="lineBack">
             <ul>
                <li class="title">客服分组</li>
                <li class="img1">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
            </ul>
        </div>
        <div class="lineBack" style="background-color:#f2f6ff;">
            <ul>
                <li class="title">客服数据</li>
                <li class="img1">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
            </ul>
        </div>
         <div class="lineBack">
             <ul>
                <li class="title">会员信息</li>
                <li class="img1">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/no.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
            </ul>
        </div>
        <div class="lineBack" style="background-color:#f2f6ff;">
            <ul style="height:71px;">
                <li class="title">客服智能分配</li>
                <li class="img1">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/no.png'" alt="" > 
                </li>
                <li class="img2">
                   <img v-lazy="'/static/image/customerService/csActive/yes.png'" alt="" > 
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
 import itemHeader from '../itemHeader.vue'
  export default {
    name:'',
    props:[''],
    data () {
      return {
           itemHeaderTitle:'客服系统功能对比'
      };
    },

    components: {
        itemHeader
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='scss' scoped>
.tableItem{
    width: 716px;
    margin: 0 auto;
    padding-bottom: 60px;
    overflow: hidden;
    .headerTitle{
        padding-top:30px;
    }
    .table{
        margin: 0 auto;
        border: 1px solid #edeef0;
        border-radius: 4px;
        margin-top: 40px;
        position: relative;
        .conImg{
            width: 167px;
            height: 133px;
            z-index: 100;
            position: absolute;
            top:56px;
            left:250px;

        }
        .borderHeader{
            width: 100%;
            height: 70px;
            ul{
                overflow: hidden;
                height: 100%;
                border-radius: 8px 8px 0px 0px;
                margin-top: 1px;
                li{
                    height: 100%;
                    line-height: 70px;
                    font-size: 22px;
                    text-align: center;
                    background-color: #4e7dfe;
                    border-left: 1px solid rgba(255,255,255,0.2);
                    float: left;
                    color: #fff;
                }
                .ewei{
                    font-size: 24px;
                    font-weight: 500;
                    width: 186px;
                }
                .other{
                    color: rgba(255,255,255,0.7);
                    width: 144px;
                }
                .type{
                    width: 236px;
                }
            }
        }
        .line1{
            width: 100%;
            height: 110px;
            ul{
                overflow: hidden;
                li{
                    float: left;
                    background-color: #f2f6ff;
                    line-height: 110px;
                    text-align: center;
                    border-left: 1px solid #e2e7ea;
                }
                .img{
                    width: 186px;
                    box-shadow: 0 8px 14px rgba(46,102,255,0.16);
                     -moz-box-shadow:0 8px 14px rgba(46,102,255,0.16);
	                 -webkit-box-shadow:0 8px 14px rgba(46,102,255,0.16);
                }
                .row1{
                    font-size: 22px;
                    color: #3b426b;
                    width: 236px;
                }
                .other{
                    font-size: 22px;
                    color: #9c9eae;
                    width: 144px;
                }
                
            }
        }
        .line2{
            width: 100%;
            height: 100px;
            ul{
                overflow: hidden;
                li{
                    float: left;
                    line-height: 100px;
                    text-align: center;
                    border-left: 1px solid #e2e7ea;
                }
            }
            .row1{
                font-size: 22px;
                color: #3b426b;
                width: 236px;
            }
            .other{
                font-size: 22px;
                color: #9c9eae;
                width: 144px;
            }
            .text{
                color: #fb6638;
                font-size: 22px;
                width: 186px; 
                box-shadow: 0 8px 14px rgba(46,102,255,0.16);
                -moz-box-shadow:0 8px 14px rgba(46,102,255,0.16);
	            -webkit-box-shadow:0 8px 14px rgba(46,102,255,0.16);
            }
            p{
                line-height: 30px;
            }
            .p2{
                margin-top: 10px;
                margin-bottom: 15px;
            }
            .p1{
                margin-top: 15px;
            }
        }
        .lineBack{
            width: 100%;
            height: 70px;
            // background-color:#f2f6ff;
            ul{
                overflow: hidden;
                li{
                    float: left;
                    line-height: 70px;
                    text-align: center;
                    border-left: 1px solid #e2e7ea;
                    img{
                        // max-width: 100%;
                        width: 40px;
                        height: 40px;
                        // padding-top: 15px;
                        vertical-align: middle;
                    }
                   
                }
            }
            .title{
                font-size: 22px;
                color: #3b426b;
                width: 236px;
            }
            .titleCon{
                font-size: 22px;
                color: #3b426b;
                width: 236px;
            }
            .img1{
                width: 186px;
                 box-shadow: 0 8px 14px rgba(46,102,255,0.16);
                -moz-box-shadow:0 8px 14px rgba(46,102,255,0.16);
	            -webkit-box-shadow:0 8px 14px rgba(46,102,255,0.16);
            }
             .img2{
                width: 144px;
            }
            p{
                line-height: 35px;
            }
        }
    }
}
    
</style>