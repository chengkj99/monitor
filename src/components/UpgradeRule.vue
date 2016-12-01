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
        listData: [
          {
            Id: 2,
            SystemName: "system",
            Metric: "memory_used",
            Type: 2,
            Period: 36000,
            Value: "10",
            TargetLevel: 7
          },          
          {
            Id: 3,
            SystemName: "system",
            Metric: "view_available",
            Type: 2,
            Period: 36000,
            Value: "10",
            TargetLevel: 7
          },
          {
            Id: 4,
            SystemName: "fcm",
            Metric: "view_available",
            Type: 2,
            Period: 36000,
            Value: "10",
            TargetLevel: 7
          },
          {
            Id: 6,
            SystemName: "fcm",
            Metric: "memory_used",
            Type: 2,
            Period: 36000,
            Value: "10",
            TargetLevel: 7
          }
        ]
      }
    }   
  }
</script>

<style lang="scss">


  #rule-node{
    
    
  }
  
  
</style>
