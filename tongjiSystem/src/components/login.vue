<template>
  <div id="login">
    <div v-title="'登录'"></div>
    <div class="shouji">
        <input type="tel" placeholder="请输入您的手机号" v-model="m.mobile" name="num" required minlength="11" maxlength="11"
           pattern="/^1[3,5]{1}[0-9]{1}[0-9]{8}$/"/>
        <s class="mobile"></s>
    </div>
    <div class="yanzheng"> 
      <input id="smscode" name="smscode" type="tel" placeholder="请输入验证码" v-model="m.verifyCode" required minlength="4"
             maxlength="4"/>
      <s class="num"></s>
          <div class="get" ref="btn_sendsms" :class="[success?'btn_getcode_n':'btn_getcode_y']"
           @click="getCode()">获取验证码
          </div>
     </div> 
    <p class="regist">未注册过的手机将自动创建账户</p>
    <button @click="login()">登 &nbsp;&nbsp;&nbsp;&nbsp;录</button>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data() {
      return {
        m: {mobile: '', verifyCode: ''},
        customerId: this.$route.query.customerId,
        isCheck: false,
        success: true,
      }
    },
    created() {
    },
    methods: {
      // 检查页面输入情况
      checkPage() {
        const myMobile = /^(13\d|14[57]|15[^4,\D]|17\d|18\d)\d{8}|170[059]\d{7}$/;
        if (!myMobile.test(this.m.mobile)) {
          this.isCheck = false;
          this.$vux.alert.show({
            content: '请输入正确的手机号'
          })
          return false;
        }else{
          this.isCheck = true;
          return true;
        }
      },
      // 获取用户体质辨识完成情况
      getCode() {
        if (this.checkPage() & this.success) {
          const _this = this;
          const btn_sendsms = this.$refs.btn_sendsms;
          (function () {
            _this.success = false;
            var time = 60;
            var tm = setInterval(function () {
              if (time == 1) {
                clearInterval(tm);
                btn_sendsms.innerText = "获取验证码";
                _this.success = true;
                return;
              }
              btn_sendsms.innerText = --time + ' 秒 ';
            }, 1000);
          })();
           console.log(_this.m);
          //调接口获取验证码判断是否成功
          this.$http.post(this.Api().getSmscode, _this.m).then((res) => {
            if (res.data.resCode == 100) {
              console.log("验证码获取成功！");
            } else {
              this.$vux.alert.show({
                content: res.data.resMsg
              })
            }
          });
        }
      },
      login() {
        if (this.checkPage() && this.m.verifyCode == '') {
          this.$vux.alert.show({
            content: '请输入验证码'
          })
        } else if (this.checkPage() && this.m.verifyCode != '') {
          this.$vux.loading.show('正在登录...')
          this.$http.post(this.Api().Login, {
            mobile: this.m.mobile,
            verifyCode: this.m.verifyCode,
          }).then((res) => {
              if (res.data.resCode == 100) {
                localStorage.mobile = res.data.data.mobile
                localStorage.doctorId = res.data.data.doctorId
                localStorage.hospitalId = res.data.data.hospitalId
                localStorage.hospitalName = res.data.data.hospitalName
                localStorage.name = res.data.data.name
                this.$vux.loading.hide();
                if (this.$route.query.redirect !== undefined) {
                  this.$router.replace(this.$route.query.redirect)
                } else {
                  window.location.href="#/index?doctorId="+res.data.data.doctorId;
                }
              } else {
                this.$vux.loading.hide();
                this.$vux.alert.show(res.data.resMsg)
              }
            });
        }
      }
    },
    mounted() {
    }
  }
</script>
<style lang="less" scoped>
  u {
    position: absolute;
    right: .2rem;
    top: .40rem;
    font-size: .24rem;
    color: #909090;
  }

  #login {
    height: 1rem;
    background: #f7f7f7;
    padding-top: 1rem;
  }

  input {
    width: 80%;
    height: .80rem;
    line-height:.5rem;
    padding-left:.60rem;
    border: .01rem solid #e7e7e7;
    font-size: .30rem;
    display: block;
    margin: .20rem auto;
    border-radius: .05rem;
  }

  input::-webkit-input-placeholder {
    font-size: .3rem;
  }
.shouji{
  position:relative;
   s{
    display: block;
    width: .20rem;
    height: .40rem;
    background: url(../assets/img/20170718153847.png) no-repeat;
    background-size: contain;
    position: absolute;
    left: .6rem;
    top: .27rem;
  }
}
 

  .yanzheng {
    position: relative;
  }

  .num {
    display: block;
    width: .25rem;
    height: .45rem;
    background: url(../assets/img/20170718153841.png) no-repeat;
    background-size: contain;
    position: absolute;
    left: .59rem;
    top: .3rem;
  }

  .get {
    display: block;
    width: 1.60rem;
    height: .50rem;
    line-height: .50rem;
    color: #C15D3E;
    font-size: .3rem;
    position: absolute;
    right: .50rem;
    top: .22rem;
    padding-left: .20rem;
    border-left: .01rem solid #e6e6e6;
  }

  .regist {
    padding-left: .30rem;
    font-size: .24rem;
    height: .80rem;
    line-height: .80rem;
    color: #646464;
  }

  button {
    width: 4.50rem;
    height: .60rem;
    line-height: .60rem;
    background: #C15D3E;
    color: #fff;
    font-size: .35rem;
    outline: none;
    border: none;
    border-radius: .08rem;
    margin: .50rem auto;
    display: block;
  }


</style>
