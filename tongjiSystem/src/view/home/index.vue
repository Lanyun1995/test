<template>
     <div id="index">
        <div v-title="'首页'"></div>
          <div class="weixinPic">
           <i class="out"  @click="outLogin()"></i>
           <div class="picContent">
             <span><img src="../../assets/img/20170718153841.png" alt=""></span>
              <span>
                不想吃药的张三
              </span>
           </div>
          </div>
          <div class="menu">
            <router-link to="/index/selectAchie">
             <div>
                <span>
                  <img src="../../assets/img/icon_yeji@3x.png" alt="">
                </span>
                <span>
                   业绩查询
                </span>
             </div>
             </router-link>
             <router-link to="/myHospital">
             <div>
                  <span>
                  <img src="../../assets/img/icon_yiyuan@3x.png" alt="">
                </span>
                <span>
                   我的医院
                </span>
             </div>
             </router-link>
             <router-link to="/myMedicine">
             <div>
                 <span>
                  <img src="../../assets/img/icon_yaopin@3x.png" alt="">
                </span>
                <span>
                   我的药品
                </span>
             </div>
             </router-link>
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
    outLogin(){
        this.$vux.confirm.show({
			    title: '退出登录',
				content: '确定要退出登录吗？',
				onShow() {
					console.log('plugin show')
				},
				onHide() {
					console.log('plugin hide')
				},
				onCancel() {
					console.log('plugin cancel')
				},
				onConfirm() {
                  alert("111")
				}
			}) 

    }
  },
  mounted() {
  }
};
</script>
<style scoped lang="less">
  .weixinPic{
     margin-bottom:.2rem;
     .out{
       width:.44rem;
       height: 0.4rem;
       display: block;
       background:url(../../assets/img/shezhi.png)no-repeat;
       background-size:contain;
       position: absolute;
       right: 0.2rem;
       top:.2rem;
     }
      height: 2.4rem;
      background:#C15D3E;
      border:.01rem solid #C15D3E;
      .picContent{
        margin:.3rem auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img{
          width:1.08rem;
          height: 1.08rem;
          border-radius:.16rem;
        }
        span:last-child{
          font-size: .32rem;
          color: #FFFFFF;
          padding-top:.2rem;
        }
      }
   }
   .menu{
      height: 1.87rem;
      background:#FFFFFF;
       display: flex;
        flex-direction: row;
      div{
        padding:.31rem .42rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        span:first-child{
          img{
            width:.8rem;
            height:.8rem;
          }
        }
      }
   }
</style>

