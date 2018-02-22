<template>
     <div id="index">
        <div v-title="'业绩详情'"></div>
         <div class="dataPick">
              2018-01
         </div>
         <div class="medDetail">
            <div>
              <span style="color:#323232;font-size:.32rem;">感冒清热颗粒</span>
              <span>10gx20袋</span>
            </div>
            <div>
                <span style="color:#6A9E3F;font-size:.4rem;font-weight:bold;">320U</span>
                <span>总销量</span>
            </div>
         </div>
         <ul class="hospList">
             <li>
                 <div>
                     北京中医院顺义医院
                 </div>
                 <div>
                     20U
                 </div>
             </li>
            <li>
                 <div>
                     北京中医院顺义医院
                 </div>
                 <div>
                     20U
                 </div>
             </li>
             <li>
                 <div>
                     北京中医院顺义医院
                 </div>
                 <div>
                     20U
                 </div>
             </li>
             <li>
                 <div>
                     北京中医院顺义医院
                 </div>
                 <div>
                     20U
                 </div>
             </li>
         </ul>
         <div class="tel" @click="tel()">
             <i class="telIcon"></i>
                 内勤热线：400-876-2121
         </div>
     </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  components: {
  },
  methods: {
      tel(){
           window.location.href = "tel:400-8762-121";
      }
  },
  mounted() {
  }
};
</script>
<style scoped lang="less">
.tel{
    position: relative;
    .telIcon{
        width:.3rem;
        height: 0.3rem;
        background:url(../../assets/img/icon_dianhua@3x.png)no-repeat;
        background-size:contain;
        position: absolute;
        top:.08rem;
        left:23%;
    }
   text-align: center;
   font-size:.32rem;
   color:#323232;
   margin:3.74rem auto .2rem;
   padding-left:.6rem;
   }
  .dataPick{
      height: 0.85rem;
      line-height:.85rem;
      text-align: center;
      color:#C15D3E;
      font-size:.32rem;
  }
  .medDetail{
      height: 2.08rem;
      background:#FFFFFF;
      padding:.2rem 0 0;
      text-align: center;
      div:last-child{
          padding:.4rem 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
      }
      margin-bottom:.2rem;
  }
  .hospList{
      background:#ffffff;
      li{
          height: 0.88rem;
          line-height:.88rem;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          padding:0 .2rem;
          border-bottom: 1px solid #dcdcdc;
          color:#323232;
          font-size:.32rem;
          div:last-child{
              color:#6A9E3F;
              font-size:.26rem;
          }
      }
  }
</style>

