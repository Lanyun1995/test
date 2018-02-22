<template>
     <div>
        <div v-title="'拓展医院'"></div>
        <div class="head">
            请认真填写以下信息
        </div>
        <ul class="fillIn">
            <li>
                <div style="font-weight:bold;">
                  选择区域：
                </div>
                 <x-address @on-hide="logHide" @on-show="logShow" :title="title" v-model="value" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择"  :show.sync="showAddress"></x-address>
            </li>
            <li>
                <div style="font-weight:bold;">
                   填写医院：
                </div>
                <div @click="onfocus()">
                   <input type="text" placeholder="请填写(填写医院名称自动搜索效果)" v-model="hospitalName">  
                </div>
            </li>
            <li>
                <div style="font-weight:bold;">
                   选择科室：
                </div>
            </li>
        </ul>
        <div class="assisRoom">
           <span>
               内科
           </span>
           <span>
               内科
           </span>
           <span>
               内科
           </span>
           <span>
               肾病科
           </span>
            <span>
               内科
           </span>
            <span>
               关心科
           </span>
           <span>
               关心科
           </span>
           <span>
               关心科
           </span>
           <span>
               关心科
           </span>
        </div>
        <div class="warnContent">
            <div style="font-weight:bold;">
                 备 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注：
            </div>
            <div>
                <textarea name="" id="" placeholder="请填写备注内容"></textarea>
            </div>
        </div>
        <div class="mediList">
            <div style="font-weight:bold;">
                代理药品：
            </div>
            <div>
                <span>快克</span>
                 <span>快克</span>
                  <span>快克</span>
                   <span>快克</span>
                    <span>
               肾病科
           </span>
            <span>
               内科
           </span>
            <span>
               关心科
           </span>
           <span>
               关心科
           </span>
           <span>
               关心科
           </span>
           <span>
               关心科
           </span>
            </div>
        </div>
        <div class="submit">提 &nbsp;&nbsp;&nbsp;&nbsp;交</div>

        <div class="autoSearch slideOut">
              <div class="searchBox">
                  <div>填写医院：</div>
                  <div>
                     <input v-model="searchValue" type="text" class="searchBox" placeholder="搜索" @input="onchange">
                     <i class="searchIcon" @click="clearContent" v-if="isShow"></i>
                  </div>
                  <div @click="cancel()">完成</div>
              </div> 
             <ul>
                 <li>
                    <div>
                        <i class="addressIcon"></i>
                        北京市中医医院
                    </div>
                    <div>北京市西城区</div>
                 </li>
                 <li>
                    <div>
                        <i class="addressIcon"></i>
                        北京市中医医院
                    </div>
                    <div>北京市西城区</div>
                 </li>
             </ul>
        </div>
     </div>
</template>
<script>
import {  XAddress, ChinaAddressV4Data, Value2nameFilter as value2name } from 'vux'
export default {
  data() {
    return {
       title:'',
       value: [],
       addressData: ChinaAddressV4Data,
       showAddress: false,
       searchValue:'',
       isShow:false,
       hospitalName:'',
    };
  },
  components: {
    XAddress,
  },
  methods: {
      clearContent(){
         this.searchValue=''
          this.isShow=false
           $('.searchBox').focus();
      },
    onchange(){
      this.isShow=true
      if(this.searchValue == ''){
          this.isShow=false
      }
    },
    onfocus(){
        $('.autoSearch').animate({top:"0"},500);
        $('.searchBox').focus();
    },
    cancel(){
        $('.autoSearch').animate({top:"-100vh"},500);
        this.hospitalName=this.searchValue
    },
     doShowAddress () {
      this.showAddress = true
      setTimeout(() => {
        this.showAddress = false
      }, 2000)
    },
    onShadowChange (ids, names) {
      console.log(ids, names)
    },
    getName (value) {
      return value2name(value, ChinaAddressV4Data)
    },
    logHide (str) {
      console.log('on-hide', str)
    },
    logShow (str) {
      console.log('on-show')
    }
  },
  mounted() {
  }
};
</script>

<style scoped lang="less">
//自动搜索
   .autoSearch{
      width:100%;
      height: 100vh;
      background:#f1f1f1;
      position: absolute;
      top:-100vh;
      left:0;
      .searchBox{
          display: flex;
          flex-direction: row;
          justify-content: space-between;
           padding: .2rem;
           height: 0.6rem;
           line-height:.6rem;
          background:#FFFFFF;
          div:first-child{
              font-size:.32rem;
              color:#323232;
              font-weight:bold;
          }
          div:nth-child(2){
              position: relative;
              .searchIcon{
                  width:.3rem;
                  height: 0.3rem;
                  background:url(../../assets/img/icon_x@3x.png)no-repeat;
                  background-size:contain;
                  position: absolute;
                  right:.2rem;
                  top:.15rem;
              }
          }
          .searchBox{
              width:4rem;
              height:.6rem;
              padding:0 .7rem 0 0;
               font-size:.32rem;
          }
          div:last-child{
              font-size:.26rem;
              color:#646464;
              text-align: right;
          }
      }
      ul{
          li{
              height: 0.64rem;
              padding:.2rem .5rem;
              border-bottom:1px solid #dcdcdc;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              div:first-child{
                    font-size: .26rem;
                    color: #C15D3E; 
                     position: relative;
                    .addressIcon{
                        width:.2rem;
                        height: 0.24rem;
                        background:url(../../assets/img/icon_dingwei@3x.png)no-repeat;
                        background-size:contain;
                        position: absolute;
                        left: -0.3rem;
                        top:.05rem;
                    }
              }
               div:last-child{
                    font-size: .24rem;
                    color: #646464; 
              }
          }
      }
    }
   .head{
     height: 0.66rem;
     line-height:.66rem;
     font-size:.26rem;
     padding-left:.2rem;
     color:#323232;
   }
   .fillIn{
       background:#FFFFFF;
       li{
           height: 0.88rem;
           padding:0 .2rem;
           border-bottom:1px solid #dcdcdc;
           font-size:.32rem;
           color:#323232;
            display: flex;
            flex-direction: row;
            div:first-child{
                line-height:.88rem;
            }
           
       }
       li:first-child{
           div:last-child{
               height: 0.5rem;
               line-height:.5rem;
               font-size:.32rem;
           color:#323232;
           }
       }
       li:nth-child(2){
           div:last-child{
               width:75%;
               line-height:.88rem;
               input{
                   width:100%;
                   font-size:.32rem;
                   padding:0;
               }
           }
       }
       li:last-child{
          border-bottom:none;
       }
   }
   .assisRoom{                 //科室
       background:#FFFFFF;
       padding:0 0 0 .2rem;
       display: flex;
       flex-wrap: wrap;
       span{
           text-align: center;
           border-radius:.48rem;
           border:1px solid #C15D3E;
           color:#C15D3E;
            font-size:12px;
           height: 0.25rem;
           line-height: 0.25rem;
           padding: .1rem 0.16rem;
           display: inline-block;
           margin:0 .2rem .2rem 0; 
           flex-grow: 1;            
           object-fit: cover; 
       }
   }
   .warnContent{                 //备注
        background:#FFFFFF;
        padding:0 0 .2rem 0;
        margin-bottom:.2rem;
        div:first-child{
            height: 0.88rem;
            line-height: .88rem;
            padding:0 .2rem;
            font-size:.32rem;
            color:#323232;
            border-top:1px solid #dcdcdc;
        }
        div:last-child{
            textarea{
                margin:0 .2rem;
                width:6.65rem;
                height: 1.4rem;
                border-radius:.08rem;
                border:1px solid #dcdcdc;
                padding:.2rem;
                font-size:.32rem;
            }
        }
   }
   .mediList{      //代理药品
     background:#FFFFFF;
     div:first-child{
         height: 0.88rem;
         line-height:.88rem;
         padding:0 .2rem;
         font-size:.32rem;
     }
     div:last-child{
         padding:0 0 0 .2rem;
         display: flex;
         flex-wrap: wrap;
         span{
           border-radius:.48rem;
           border:1px solid #698592;
           color:#698592;
           font-size:12px;
           display: inline-block;
           margin:0 .2rem .2rem 0; 
            text-align: center;
           height: 0.25rem;
           line-height: 0.25rem;
           padding: .1rem 0.16rem;
           display: inline-block;
           margin:0 .2rem .2rem 0; 
           flex-grow: 1;            
           object-fit: cover;   
         }
     }
   }
   .submit{
       width:5.2rem;
       height: 0.64rem;
       line-height:.64rem;
       background:#C15D3E;
       color:#FFFFFF;
       text-align: center;
       font-size:.32rem;
       border-radius:.08rem;
       margin:.6rem auto .2rem;
   }
</style>
<style>
.weui-cell{
     padding-left:0rem !important;
   }
   .vux-cell-placeholder{
       color:#909090 !important;
   }
</style>




