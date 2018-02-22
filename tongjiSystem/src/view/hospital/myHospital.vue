<template>
     <div>
        <div v-title="'我的医院'"></div>
         <router-link to="/myHospital/addHospital">
         <div class="addNewHos">
             <i class="addIcon"></i>
             拓展新的医院
         </div>
          </router-link>
        <ul class="hospitalList">
            <li @click="con(0)" :class="isShow[0]?'showCon':''">
                <div class="hosName">
                     <div>
                        <span>北京中医医院顺义医院</span>
                        <span>北京市-顺义区</span>
                     </div>
                    <div>
                        <i class="rightIcon" v-show="!isShow[0]"></i> 
                        <i class="bottomIcon"  v-show="isShow[0]"  ></i>
                     </div>
                </div>
                 <transition name="fade">
                    <ul class="childCon" v-show="isShow[0]"> 
                        <li>
                            <div>
                                <span>
                                    <img src="../../assets/img/icon_keshi@3x.png" alt="">
                                </span>
                                <span style=" color: #C15D3E;">科室</span>    
                            </div>
                            <div>
                                <span style="background: #C15D3E;">内科</span>
                                <span style="background: #C15D3E;">肾病科</span>
                                <span style="background: #C15D3E;"> 肾病科</span>                                                   
                            </div>
                        </li>
                        <li>
                             <div>
                                <span>
                                    <img src="../../assets/img/icon_yaopin1@3x.png" alt="">
                                </span>
                                <span style=" color:#698592;">药品</span>    
                            </div>
                            <div>
                                <span style="background: #698592;">内科</span>
                                <span style="background: #698592;">肾病科</span>
                                <span style="background: #698592;">肾病科</span>
                            </div>
                        </li>
                    </ul>
                </transition>
            </li>
            <li @click="con(1)" :class="isShow[1]?'showCon':''">
                <div class="hosName">
                     <div>
                        <span>北京中医医院顺义医院</span>
                        <span>北京市-顺义区</span>
                     </div>
                    <div>
                        <i class="rightIcon" v-show="!isShow[1]"></i> 
                        <i class="bottomIcon"  v-show="isShow[1]"  ></i>
                     </div>
                </div>
                 <transition name="fade">
                    <ul class="childCon" v-show="isShow[1]"> 
                        <li>
                            <div>
                                <span>
                                    <img src="../../assets/img/icon_keshi@3x.png" alt="">
                                </span>
                                <span style=" color: #C15D3E;">科室</span>    
                            </div>
                            <div class="waterfall">
                                <span style="background: #C15D3E;">内科</span>
                                <span style="background: #C15D3E;">肾病科</span>
                                <span style="background: #C15D3E;"> 肾病科</span>  
                                 <span style="background: #C15D3E;">内科</span>
                                <span style="background: #C15D3E;">肾病科</span>
                                <span style="background: #C15D3E;"> 肾病科</span> 
                                 <span style="background: #C15D3E;">内科</span>
                                <span style="background: #C15D3E;">肾病科</span>
                                <span style="background: #C15D3E;"> 肾病科</span>                          
                            </div>
                        </li>
                        <li>
                             <div>
                                <span>
                                    <img src="../../assets/img/icon_yaopin1@3x.png" alt="">
                                </span>
                                <span style=" color:#698592;">药品</span>    
                            </div>
                            <div>
                                <span style="background: #698592;">内科</span>
                                <span style="background: #698592;">肾病科</span>
                                <span style="background: #698592;">肾病科</span>
                            </div>
                        </li>
                    </ul>
                </transition>
            </li>
        </ul>
     </div>
</template>
<script>
export default {
  data() {
    return {
        isShow: [],
    };
  },
  components: {
  },
  methods: {
       con(index) {
          if (this.isShow[index]) {
            this.$set(this.isShow, index, false);
          } else {
            this.$set(this.isShow, index, true);  
          }
    },
  },
  mounted() {
  }
};
</script>
<style scoped lang="less">
  .addNewHos{
      height: 0.88rem;
      line-height:.88rem;
      background:#FFFFFF;
      padding:0 0 0 .7rem;
      font-size:.32rem;
      color:#323232;
      margin-bottom:.2rem;
      position: relative;
      .addIcon{
          width:.3rem;
          height: 0.3rem;
          background:url(../../assets/img/icon_add.png) no-repeat;
          background-size:contain;
          position: absolute;
          left: .2rem;
          top:.285rem;
      }
  }
  .hospitalList{
      background:#FFFFFF;
      li{
          border-bottom:1px solid #dcdcdc;
          .hosName{
               display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding:.2rem;
                   div:first-child{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    span:first-child{
                        font-size:.32rem;
                        color:#323232;
                    }
                    span:last-child{
                        font-size:.26rem;
                        color:#646464;
                    }
                }
                    div:last-child{
                        position: relative;
                        .rightIcon{
                            width:.163rem;
                            height: 0.32rem;
                            background:url(../../assets/img/icon_arrow_r@3x.png) no-repeat;
                            background-size:contain;
                            position: absolute;
                            right: 0;
                            top:.197rem;
                        }
                        .bottomIcon{
                             width:0.326rem;
                            height:.163rem;
                            background:url(../../assets/img/icon_arrow_top@3x.png) no-repeat;
                            background-size:contain;
                            position: absolute;
                            right: 0;
                            top:.305rem;
                        }
                    }
          }
     
      }
  }
            .childCon {
                background: #FFFFFF;
                 border-top:1px solid #dcdcdc;
                li{
                    padding:0rem 0 0 .3rem;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    
                    div:first-child{
                         display: flex;
                         flex-direction: column;
                        justify-content: center;
                         font-size: .2rem;
                         span:first-child{
                             text-align: center;
                         }
                        img{
                            width:.24rem;
                            height:.24rem;
                        }
                    }
                    div:last-child{
                        padding:.2rem 0 0 0rem;
                        width:88%;
                         display: flex;
                         flex-wrap: wrap;
                        span{
                            text-align: center;
                            border-radius:.48rem;
                            color:#FFFFFF;
                             height: 0.25rem;
                            line-height: 0.25rem;
                            padding: .1rem 0.16rem;
                            font-size:12px;
                            display: inline-block;
                            margin:0 .2rem .2rem 0;
                            flex-grow: 1;            
                            object-fit: cover; 
                        }
                    }
                    .waterfall:after{                       
                            content: ' ';            
                            flex-grow: 5;        
                    } 
                }
                li:last-child{
                    border-bottom:none;
                }
            }
            .fade-enter-active,
            .fade-leave-active {
                transition: opacity 0.2s;
            }

            .fade-enter,
            .fade-leave-active {
                opacity: 0;
            }
</style>

