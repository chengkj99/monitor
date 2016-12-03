<!-- 监控项组件 -->

<template>
    <div id="monitor-item-node">
      <MonitorAlarm componentName="监控项" :listData="listData"></MonitorAlarm>
      
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
        
        listData:{}
      }
    } ,
    computed:{
      listData () {
        return this.$store.state.MonitorItemData;
      }
    },
    methods:{
    
    },
    mounted () {
      this.$store.dispatch('GET_MONITOR_ITEM_AC')
    }
  }
</script>

<style lang="scss">

  
  #monitor-item-node{
  
  }
</style>
