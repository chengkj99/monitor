<!-- 监控项组件 -->

<template>
  <div id="monitor-item-node">
    <MonitorAlarm componentName="告警来源系统" :listData="listData"></MonitorAlarm>
  </div>
</template>


<script>
import MonitorAlarm from './tpl/MonitorAlarm'

  export default {
  
    components:{
      MonitorAlarm
    },
  
    data () {
      return {
        listData: [
          {
              Id: 1,
              SystemName: "system",
              Describe: "Describe",
              ConfirmState: true//false显示未确认后面加确认操作//true已确认
          },
          {
              Id: 3,
              SystemName: "wtf",
              Describe: "Describe",
              ConfirmState: false
          },
          {
              Id: 6,
              SystemName: "fuck",
              Describe: "Describe",
              ConfirmState: false
          }
        ]
      }
    }   
  }
</script>

<style lang="scss">


  #monitor-item-node{

  }
</style>
