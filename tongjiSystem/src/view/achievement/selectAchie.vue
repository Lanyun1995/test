<template>
     <div id="index">
        <div v-title="'业绩查询'"></div>
         <div class="dataPick">
               <datetime v-model="today" @on-change="change" :show.sync="visibility" format="YYYY-MM"></datetime>
               <s class="data"></s>
         </div>
         <ul class="medList">
             <router-link to="/index/selectAchie/achieDetail">
                   <li class="hosName">
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
                        <i class="rightIcon" ></i>
                    </div>
                </li>
             </router-link>
                <router-link to="/index/selectAchie/achieDetail">
                   <li class="hosName">
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
                        <i class="rightIcon" ></i>
                    </div>
                </li>
             </router-link>
         </ul>
     </div>
</template>
<script>
import { Datetime } from 'vux'
export default {
    data() {
        return {
              visibility: false,
        };
    },
    components: {
        Datetime
    },
    methods: {
            change(val) {
                console.log('change', val)
            },
            getYear() {
                this.oDate = new Date();
                return this.oDate.getFullYear() + '-' + this.timeFunc((this.oDate.getMonth() + 1))
            },
            timeFunc(ele) {
                return ele < 10 ? "0" + ele : ele;
            },
    },
    mounted() {
    },
    created() {
        this.today = this.getYear();  //获得今天的日期   
    },
};
</script>
<style scoped lang="less">
  .dataPick{
      text-align: center;
      position: relative;
      .data {
            width: .24rem;
            height: .159rem;
            display: block;
            background: url(../../assets/img/red.png)no-repeat;
            background-size: 100%;
            left: 58%;
            top: 45%;
            position: absolute;
        }
  }
  .medList{
      background:#FFFFFF;
    li{
              border-bottom:1px solid #dcdcdc;
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
                }
          }
  }
</style>
<style>
.weui-cell__ft{
    text-align: center !important;
}
.weui-cell_access .weui-cell__ft:after {
   display: none !important;
}
.vux-cell-value{
    color:#C15D3E !important;
    font-size:.32rem !important;
}
</style>


