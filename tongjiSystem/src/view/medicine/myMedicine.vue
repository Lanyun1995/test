<template>
     <div id="index">
        <div v-title="'我的药品'"></div>
        <router-link to="/myMedicine/addMedicine">
            <div class="addNewHos">
                <i class="addIcon"></i>
                拓展新的药品
            </div>
         </router-link>
          <ul class="hospitalList">
            <li @click="con(0)" :class="isShow[0]?'showCon':''">
                <div class="hosName">
                    <div class="mediDetail">
                       <div>
                           <span style="font-size:.32rem;color:#323232;">加蓝他敏片</span>
                           &nbsp; &nbsp;
                           <span>金庸灵力</span>
                       </div>
                       <div>
                           <span>5mg*10片*3板</span>
                            &nbsp; &nbsp;
                           <span>医保已</span>
                       </div>
                       <div>浙江金华康恩贝生物制药有限公司</div>
                    </div>
                    <div class="isSale">
                        已销：<span>100U</span>
                    </div>
                    <div class="rightJian">
                        <i class="rightIcon" v-show="!isShow[0]"></i>
                         <i class="bottomIcon" v-show="isShow[0]"></i>
                    </div>
                </div>
                 <transition name="fade">
                    <ul class="childCon" v-show="isShow[0]"> 
                        <li>
                            <span>协和医院</span>
                            <span>100U</span>
                        </li>
                        <li>
                            <span>协和医院</span>
                            <span>100U</span>
                        </li>
                        <li>
                            <span>协和医院</span>
                            <span>100U</span>
                        </li>
                        <li>
                            <span>协和医院</span>
                            <span>100U</span>
                        </li>
                        <li>
                            <span>协和医院</span>
                            <span>100U</span>
                        </li>
                    </ul>
                </transition>
            </li>
             <li @click="con(1)" :class="isShow[1]?'showCon':''">
                <div class="hosName">
                    <div class="mediDetail">
                       <div>
                           <span style="font-size:.32rem;color:#323232;">加蓝他敏片</span>
                           &nbsp; &nbsp;
                           <span>金庸灵力</span>
                       </div>
                       <div>
                           <span></span>
                            &nbsp; &nbsp;
                           <span></span>
                       </div>
                       <div>浙江金华康恩贝生物制药有限公司</div>
                    </div>
                    <div class="isSale">
                        已销：<span>100U</span>
                    </div>
                    <div class="rightJian">
                        <i class="rightIcon" v-show="!isShow[1]"></i>
                         <i class="bottomIcon" v-show="isShow[1]"></i>
                    </div>
                </div>
                 <transition name="fade">
                    <ul class="childCon" v-show="isShow[1]"> 
                        <li>
                            <span>协和医院</span>
                            <span>100U</span>
                        </li>
                        <li>
                            <span>协和医院</span>
                            <span>100U</span>
                        </li>
                        <li>
                            <span>协和医院</span>
                            <span>100U</span>
                        </li>
                        <li>
                            <span>协和医院</span>
                            <span>100U</span>
                        </li>
                        <li>
                            <span>协和医院</span>
                            <span>100U</span>
                        </li>
                         <li>
                            <span>协和医院</span>
                            <span>100U</span>
                        </li>
                         <li>
                            <span>协和医院</span>
                            <span>100U</span>
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
              height: 1.5rem;
              padding:.2rem;
               display: flex;
                flex-direction: row;
                justify-content: space-between;
               .mediDetail{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    font-size:.26rem;
                    color:#646464;
                }
                .isSale{
                    line-height:1.5rem;
                     font-size:.26rem;
                    color:#646464;
                    span{
                        font-size:.36rem;
                        color: #6A9E3F; 
                    }
                }
                .rightJian{
                     position: relative;
                        .rightIcon{
                            width:.163rem;
                            height: 0.32rem;
                            background:url(../../assets/img/icon_arrow_r@3x.png) no-repeat;
                            background-size:contain;
                            position: absolute;
                            right: 0;
                            top:.6rem;
                        }
                        .bottomIcon{
                            width:0.326rem;
                            height:.163rem;
                            background:url(../../assets/img/icon_arrow_top@3x.png) no-repeat;
                            background-size:contain;
                            position: absolute;
                            right: 0;
                            top:.66rem;
                        }
                }
          }
      }
  }
            .childCon {
                background: #FFFFFF;
                border-top:1px solid #dcdcdc;
                display: flex;
                flex-direction: row; 
                padding:.2rem;   
                overflow-x: auto;
                white-space: nowrap;    
                li{
                    border-bottom:none;
                    text-align: center; 
                     display: flex;
                    flex-direction: column; 
                    justify-content: space-between;
                    padding:0 .2rem 0 0;
                    span:last-child{
                        color:#6A9E3F;
                    }
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

