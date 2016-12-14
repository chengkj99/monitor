<!-- 升级规则配置组件 -->


<template>
  <div id="black－list－rule-node">
    <div class="black－list－rule-box">
      <!-- use $on and $emit -->
      <h3 class="title is-3">
        {{componentName}}管理
        <img src="../../assets/images/add-metric.svg" @click="addMonitor"  />
      </h3>
    </div>
    <div class="table-box"  v-if="componentName=='黑名单'" >
      <table class="table">
        <thead>
        <tr>
          <th>告警来源系统</th>
          <th>监控节点</th>
          <th>监控子节点</th>
          <th>监控项名称</th>
          <th>加黑开始时间</th>
          <th>加黑结束时间</th>
          <th>加黑原因</th>
          <th>操作</th>
        </tr>
        </thead>
        
        <tbody>
        <tr v-for="v in listData">
          <td>{{ v.SystemName }}</td>
          <td>{{ v.Endpoint }}</td>
          <td>{{ v.SubEndpoint }}</td>
          <td>{{ v.Metric }}</td>
          <td>{{ v.BeginTime }}</td>
          <td>{{ v.EndTime }}</td>
          <td>{{ v.Reason }}</td>
          <td>
            <a class="button is-small" @click="deleteHandle" :data-id="v.Id">删除</a>
          </td>
        </tr>
        </tbody>
        
      </table>
    </div>
    <div class="table-box" v-else>
      <table class="table">
        <thead>
        <tr>
          <th>告警来源系统</th>
          <th>监控项名称</th>
          <th>升级类型</th>
          <th>时间段</th>
          <th>数值</th>
          <th>要升到的等级</th>
          <th>操作</th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="v in listData">
          <td>{{ v.SystemName }}</td>
          <td>{{ v.Metric }}</td>
          <td>{{ v.Type | changeUpgradeType}}</td>
          <td>{{ v.Period }}</td>
          <td>{{ v.Value }}</td>
          <td>{{ v.TargetLevel}}</td>
          <td>
            <a class="button is-small" @click="deleteHandle" :data-system-name="v.SystemName" :data-metric="v.Metric" :data-type="v.Type" >删除</a>
          </td>
        </tr>
        </tbody>

      </table>
    </div>

    <template v-if="componentName=='黑名单'">
        <div v-show="modalAddShow">
          <AddBacklist :componentName="componentName" v-on:modalChange="addMonitor"></AddBacklist>
        </div>
    </template>
    
    <template v-else>
      <div v-show="modalAddShow">
        <AddRule :componentName="componentName" v-on:modalChange="addMonitor"></AddRule>
      </div>
    </template>
    

  </div>
</template>


<script>
import AddRule from './AddRule'
import AddBacklist from './AddBacklist'

  export default {
  /* componentName:监控项,来源系统 */
    props:['componentName','listData'],
  
    data () {
      return {
        modalAddShow:false,
        sysName:'',
        renameId:''
      }
    },
   
    methods: {
    
      deleteHandle (e) {

        let isConfirm = confirm()
        if (!isConfirm){
          return
        }
        let itemId=e.target.dataset.id; 
        
        //通过componentName判定派发哪个actions
        //黑名单 还是事件规则
        if (this.componentName =='黑名单'){
          this.$store.dispatch({
            type:'DEL_BACK_LIST_AC',
            amount:{
              id:itemId
            }

          })
        }else{
          let systemName = e.target.dataset.systemName
          let metric = e.target.dataset.metric
          let type = e.target.dataset.type
          this.$store.dispatch({
            type:'DEL_RULE_LIST_AC',
            amount:{
              systemName:systemName,
              metric:metric,
              type:type
            }
          })
        }
      },
      // confirmHandle (e) {
      //   let itemId=e.target.dataset.id; 
      //   alert('确认'+itemId)
      // },
      modalChange (e) {
       var _this=e.target;
       this.sysName=_this.dataset.sysName;
       this.renameId=_this.dataset.id;
      console.log(this.sysName+'this.sysName')
        this.$store.dispatch('RENAME_CHANGE_AC')
      },
      addMonitor () {
        // if(this.modalAddShow==false){
        //   this.modalAddShow=true
        // }else{
        //   this.modalAddShow=false
        // }
        this.$store.dispatch('ADD_RULE_SHOW_AC')
      }
    },
    computed: {
     modalAddShow(){
       return this.$store.state.modalAddShow
     }
    },
    filters: {
      ConfirmState (val) {
        let value;
        if(val==false){
          value='未确认'
        }else{
          value='已确认'
        }
        return value;
      },
      changeUpgradeType(val){
        switch(val){
          case 1:
            return '按时间'
          case 2:
             return'按次数'
          case 3:
             return '按时间段内次数'
          case 4:
            return '按时间段内比值'
        }
      }
    },

    components:{
      AddRule,
      AddBacklist
    }
            
  }
</script>

<style lang="scss">
  
  #black－list－rule-node{
    position: relative;
    display: block;
    width: 100%;

    .black－list－rule-box{

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
