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
        listData:{
          batch_test: 
          [ 
            {
               Id: 19,
               SystemName: "batch_test",
               MetricName: "test_rename",
               Describe: "Describe Describe Describe Describe",
               ConfirmState: false
            }, 
            {
               Id: 21,
               SystemName: "batch_test",
               MetricName: "test2",
               Describe: "Describe Describe Describe Describe",
               ConfirmState: true
            }
          ],
          new_sys: 
          [  
            {
                Id: 3,
                SystemName: "new_sys",                    
                MetricName: "cpu_idle",
                Describe: "Describe Describe Describe",
                ConfirmState: true
            },
                   
            {
                Id: 4,
                SystemName: "new_sys",
                MetricName: "disk_used",
                Describe: "DescribeDescribe",
                ConfirmState: false
            }
          ],
          old_sys: 
          [  
            {
                Id: 8,
                SystemName: "old_sys",                    
                MetricName: "cpu_idle",
                Describe: "Describe Describe Describe",
                ConfirmState: true
            },
                   
            {
                Id: 9,
                SystemName: "old_sys",
                MetricName: "disk_used",
                Describe: "DescribeDescribe",
                ConfirmState: false
            }
          ]
        }
      }
    }   
  }
</script>

<style lang="scss">

  
  #monitor-item-node{
  
  }
</style>
