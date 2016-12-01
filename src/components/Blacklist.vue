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
        listData: [
          {
            Id: 123,
            GroupName: "6zu",
            SystemName: "wtf",
            Endpoint: "neverused",
            SubEndpoint: "sep",
            Metric: "cpu",
            BeginTime: "2016-11-14 21:00:12",
            EndTime: "2016-11-24 10:42:04",
            Reason: "update"
          },          
          {
            Id: 345,
            GroupName: "6zu",
            SystemName: "wtf",
            Endpoint: "neverused",
            SubEndpoint: "sep",
            Metric: "cpu",
            BeginTime: "2016-11-14 21:00:12",
            EndTime: "2016-11-24 10:42:04",
            Reason: "update"
          },          
          {
            Id: 555,
            GroupName: "6zu",
            SystemName: "wtf",
            Endpoint: "neverused",
            SubEndpoint: "sep",
            Metric: "cpu",
            BeginTime: "2016-11-14 21:00:12",
            EndTime: "2016-11-24 10:42:04",
            Reason: "update"
          },          
          {
            Id: 999,
            GroupName: "6zu",
            SystemName: "wtf",
            Endpoint: "neverused",
            SubEndpoint: "sep",
            Metric: "cpu",
            BeginTime: "2016-11-14 21:00:12",
            EndTime: "2016-11-24 10:42:04",
            Reason: "update"
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
