<!-- 监控项组件 -->
<!-- 告警来源系统组件 -->

<template>
  <div id="monitor-alarm-node">
    <div class="monitor-alarm-box">
      <!-- use $on and $emit -->
      <h3 class="title is-3">
        {{componentName}}管理
        <img src="../../assets/images/add-metric.svg" @click="addMonitor"  />
      </h3>
    </div>
    <div class="table-box">
      <table class="table">
        <thead>
        <tr>
          <th>告警来源系统</th>
          <th v-if="componentName=='监控项'">监控项名称</th>
          <th>描述</th>
          <th>是否确认</th>
          <th>操作</th>
        </tr>
        </thead>
        

        <tbody v-if="componentName!='监控项'">
        <tr v-for="v in listData">
          <td>{{ v.SystemName }}</td>
          <td>{{ v.Describe }}</td>
          <td>{{ v.ConfirmState | ConfirmState }}</td>
          <td>
            <a class="button is-small" @click="modalChange" :data-id="v.Id" :data-metric-name="v.MetricName" :data-sys-name="v.SystemName">纠错</a>
            <a class="button is-small" @click="deleteHandle" :data-id="v.Id">删除</a>
            <a class="button is-small" @click="confirmHandle" :data-id="v.Id" v-if="!v.ConfirmState">确认</a>
            <a class="button is-small" style="visibility: hidden;"  v-else>确认</a>
          </td>
        </tr>
        </tbody>
        
        <tbody v-for="(val, key, index) in listData" v-else >
        <tr class="tr-title">
          <td colspan="6">{{key}}</td>
        </tr>

        <tr v-for="v in val">
          <td>{{ v.SystemName }}</td>
          <td>{{ v.MetricName }}</td>
          <td>{{ v.Describe }}</td>
          <td>{{ v.ConfirmState | ConfirmState }}</td>
          <td>
            <a class="button is-small" @click="modalChange" :data-id="v.Id" :data-metric-name="v.MetricName" :data-sys-name="v.SystemName">纠错</a>
            <a class="button is-small" @click="deleteHandle" :data-id="v.Id">删除</a>
            <a class="button is-small" @click="confirmHandle" :data-id="v.Id" v-if="!v.ConfirmState">确认</a>
            <a class="button is-small" style="visibility: hidden;"  v-else>确认</a>

          </td>
        </tr>
        </tbody>
        
      </table>
    </div>

    <div v-show="modalRenameShow">
      <Rename :componentName="componentName" :sysName="sysName" :metricName="metricName"  :renameId="renameId"></Rename>
    </div>

    <div v-show="modalAddMonitorItemShow">
      <AddMonitorItem :componentName="componentName" v-on:modalChange="addMonitor"></AddMonitorItem>
    </div>


  </div>
</template>


<script>
import Rename from './Rename'
import AddMonitorItem from './AddMonitorItem'

  export default {
  /* componentName:监控项,来源系统 */
    props:['componentName','listData'],
  
    data () {
      return {
       modalRenameShow:false,
        modalAddMonitorItemShow:false,
        
        metricName:'',
        sysName:'',
        renameId:''
      }
    },
    methods: {
    
      deleteHandle (e) {
        let itemId=e.target.dataset.id;
        if(this.componentName=='监控项'){
          this.$store.dispatch({
            type:'DEL_MONITOR_ITEM_AC',
            amount:{
              id:itemId
            }
          })
        }else{
          this.$store.dispatch({
            type:'DEL_ALARM_SOURCE_AC',
            amount:{
              id:itemId
            }
          })
        }
      },
      confirmHandle (e) {
        let itemId=e.target.dataset.id; 
        
         if(this.componentName=='监控项'){
           this.$store.dispatch({
             type:'CONFIRM_MONITOR_ITEM_AC',
             amount:{
               id:itemId
             }
          })
         }else{
         this.$store.dispatch({
             type:'CONFIRM_ALARM_SOURCE_AC',
             amount:{
               id:itemId
              }
          })
         }
      },
      modalChange (e) {
       var _this=e.target;
       this.metricName=_this.dataset.metricName;       
       this.sysName=_this.dataset.sysName;
       this.renameId=_this.dataset.id;
      console.log('metricName:'+this.metricName+'sysName:'+this.sysName)
        this.$store.dispatch('RENAME_CHANGE_AC')
      },
      addMonitor () {
        this.$store.dispatch('ADD_SYSTEM_SHOW_AC')
      }
    },
    computed: {
      modalRenameShow () {
        return this.$store.state.modalRenameShow
      },
      modalAddMonitorItemShow(){
        return this.$store.state.modalAddMonitorItemShow
      }
    },
    filters: {
      ConfirmState (val) {
        return val?'已确认':'未确认';
      }
    },
    components:{
      Rename,
      AddMonitorItem
    }
            
  }
</script>

<style lang="scss">
  
  #monitor-alarm-node{
    position: relative;
    display: block;
    width: 100%;

    .monitor-alarm-box{

      h3{
        img{
          width: 22px;
          height: auto;
        }
      }
    }
    
    .table-box{
      margin-top: 20px;

      table{
        box-shadow: 0px 0px 5px #ccc;
        
        th{
          text-align: center;

          &:hover{
            background: none;
          }
        }
        
        td{
          text-align: center;

          &:hover{
            background: none;
            color:black;
          }
          /*&:last-child{*/
          /*display: flex;*/
          /*flex-flow: row nowrap;*/
          /*justify-content: center;*/
          /*}*/
        }
        
        tr{
          border-top:1px solid #dbdbdb;
          &:hover{
            color:black;
            cursor: pointer;
          }

          &.tr-title{
            font-weight: bold;
            font-size: 16px;
            td{
              text-align: left;
            }

          }
        }




      }

    }

  }
</style>
