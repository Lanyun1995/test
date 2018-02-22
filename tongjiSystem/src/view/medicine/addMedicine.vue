<template>
     <div id="index">
        <div v-title="'拓展新药品'"></div>
        <ul>
            <li>
               <div>
                   <span>
                      感冒清热颗粒
                      <span>10gx20袋</span>
                   </span>
                    <span>
                      8人在售
                    </span>
               </div>
               <div @click="isApply()">
                   <!-- <span>申请销售</span> -->
                   <span>申请中</span>
               </div>
            </li>
             <li>
               <div>
                   <span>
                      感冒清热颗粒
                      <span>10gx20袋</span>
                   </span>
                    <span>
                      8人在售
                    </span>
               </div>
               <div @click="isApply()">
                   <span>申请销售</span>
               </div>
            </li>
             <li>
               <div>
                   <span>
                      感冒清热颗粒
                      <span>10gx20袋</span>
                   </span>
                    <span>
                      8人在售
                    </span>
               </div>
               <div @click="isApply()">
                   <span>申请销售</span>
               </div>
            </li>
        </ul>
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
      isApply(){
        this.$vux.confirm.show({
			    title: '申请销售',
				content: '确定要申请销售吗？',
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
   ul{
       background:#FFFFFF;
       li{
           display: flex;
           flex-direction: row;
           justify-content: space-between;
           padding: .2rem;
           height: 0.78rem;
           border-bottom:1px solid #dcdcdc;
           div:first-child{
               display: flex;
               flex-direction: column;
               justify-content: space-between;
               span:first-child{
                   color:#323232;
                   font-size:.32rem;
               }
               span:last-child{
                   color:#646464;
                   font-size:.26rem;
               }
           }
           div:last-child{
                line-height: 0.78rem;
            span{
              width:1.38rem;
              height: 0.48rem;
              display: inline-block;
              line-height:.48rem;
              font-size:.26rem;
              border:1px solid #C15D3E;
              border-radius:.48rem;
              text-align: center;
              color:#C15D3E;
               } 
           }
       }
   }
</style>

