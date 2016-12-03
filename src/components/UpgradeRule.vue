<!-- 升级规则组件 -->

<template>
  <div id="rule-node">
    <BlackListRule componentName="升级规则配置" :listData="listData"></BlackListRule>
    
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
        return this.$store.state.RuleListData;
      }
    },
    methods:{
    
    },
    mounted () {
      this.$store.dispatch('GET_RULE_LIST_AC')
    }
  }
</script>

<style lang="scss">


  #rule-node{
    
    
  }
  
  
</style>
