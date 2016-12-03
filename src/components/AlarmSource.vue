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
       listData: []
      }
    },
    computed:{
      listData () {
        return this.$store.state.AlarmSourceData;
      }
    },
    methods:{
    
    },
    mounted () {
      this.$store.dispatch('GET_ALARM_SOURCE_AC')
    }
  }
</script>

<style lang="scss">


  #monitor-item-node{

  }
</style>
