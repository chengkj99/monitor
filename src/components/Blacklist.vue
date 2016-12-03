<!-- 黑名单组件 -->

<template>
  <div id="rule-node">
    <BlackListRule componentName="黑名单" :listData="listData"></BlackListRule>

  </div>
  
      
</template>


<script>
import BlackListRule from './tpl/BlackListRule'

  export default {
  
    components:{
      BlackListRule
    },
  
    data () {
      return {
        listData:[]
      }
    },
    computed:{
      listData () {
        return this.$store.state.BackListData;
      }
    },
    methods:{
    
    },
    mounted () {
      this.$store.dispatch('GET_BACK_LIST_AC')
    }
  }
</script>

<style lang="scss">

@import "../assets/css/page";

  #rule-node{


  }


</style>
