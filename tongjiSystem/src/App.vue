<template>
  <div id="app">
    <loading v-model="isLoading" :text="loadingText"></loading>
    <router-view v-show="!isLoading"></router-view>
  </div>
</template>

<script>
  import store from './store/store'
  import {Loading} from 'vux'
  import {mapState} from 'vuex'

  export default {
    name: 'app',
    data() {
      return {
        loadingText: '数据加载中...',
      }
    },
    components: {
      Loading
    },
    mounted(){
    },
    computed: {
      ...mapState({
        isLoading: state => state.loading.isLoading
      })
    },
    store
  }
</script>

<style>
.weui-toast{
  padding:0 .1rem;
  font-size:.24rem;
}
.weui-toast__content{
  padding:0 .1rem;
  font-size:.24rem !important;
}
</style>
