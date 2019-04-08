<template>
    <div class='vip-manage-easier' >
        <swipe  style='height:100%;' indicator-color="white" @change="onChange">
            <swipe-item class='vip-manage-easier__swipe-item' v-for="(item,key) in itemUrlList" :key="key">
                <div class="itemHeader">
                    <p class="itemHeaderTitle" >{{item.itemHeaderTitle}}</p>
                </div>
                <p class="swiper_text">{{item.text}}</p>
                <img class='vip-manage-easier__img' v-lazy="item.imgUrl" alt="">
            </swipe-item>
            <div class="custom-indicator" slot="indicator" >
                <span class="point " v-for="(item,key) in currents" :class='{"active-point":current==item}'  :key="key"></span>
            </div>
        </swipe>
    </div>
</template>

<script>
    import {
        Swipe,
        SwipeItem
    } from 'vant';
import { log } from 'util';
    export default {
        props:{
            itemUrlList:{
                type:Array
            },
            background:{
                type:String
            }  
        },
        data() {
            return {
                current: 0,
               
                detailLeftAlign: {
                    textAlign: 'left'
                },
                
                currents:[],
            }
        },
        mounted(){
            this.computerCurrents();
        },
        
        methods: {
            onChange(index) { 
                this.current = index;
            },
            //计算数组长度   添加到currents
            computerCurrents(){
                for(let i=0;i<this.itemUrlList.length;i++){
                    this.currents.push(i);
                }
                
                console.log(this.currents);
                
            }
        },
        components: { 
            Swipe,
            SwipeItem
        }
    }
</script>

<style scoped lang='scss'>
    .vip-manage-easier {
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        width: 100%;
        padding-bottom: 60px;
        text-align: center;
        .van-swipe{
            text-align: center;
            .vip-manage-easier__swipe-item{
                .itemHeaderTitle {
                    font-size:1.125rem;
                    text-align: center;
                    color: #5d6494;
                    font-weight: 600;
                }
                .swiper_text{
                    margin: 0 auto; 
                    margin-top: 20px;
                    font-size:0.69rem;
                    // text-align: center;
                    color: #7b88a2;
                    width: 80%;
                }
                .vip-manage-easier__img {
                    width: 80%;
                    display: block;
                    
                    margin: 0 auto;
                    // overflow: hidden;
                }
            }
        }
       
        .custom-indicator {
            display: inline-block;
            >.point {
                width: 48px;
                height: 6px;
                border-radius: 3px;
                background: #ddd;
                float: left;
                margin-left: 15px;
                margin-top: 30px;
            }
           
            >.active-point{
                 background: #f15f51;
            }
        }
    }
</style>