<!-- 监控项组件 -->

<template>
    <div id="monitor-item-node">
      <div class="monitor-item-box">
        <h3 class="title is-3">
          监控项管理
          <img src="../assets/images/add-metric.svg"/>
        </h3>
      </div>
      <div class="table-box">
        <table class="table">
          <thead>
          <tr>
            <th>告警来源系统</th>
            <th>监控项名称</th>
            <th>描述</th>
            <th>是否确认</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody v-for="(val, key, index) in listData">
          <tr class="tr-title">
            <td colspan="6">{{key}}</td>
          </tr>
          <tr v-for="v in val">
            <td>{{ v.SystemName }}</td>
            <td>{{ v.MetricName }}</td>
            <td>{{ v.Describe }}</td>
            <td>{{ v.ConfirmState | ConfirmState }}</td>
            <td>
              <a class="button is-small" @click="modalChange" :data-id="v.Id" :data-metric-name="v.MetricName" :data-sys-name="v.SystemName">重命名</a>
              <a class="button is-small" @click="deleteHandle" :data-id="v.Id">删除</a>
              <a class="button is-small" @click="confirmHandle" :data-id="v.Id" v-if="!v.ConfirmState">确认</a>

            </td>
          </tr>
          </tbody>
        </table>
      </div>
      
      <div v-show="modalRenameShow">
        <Rename :metricName="metricName" :sysName="sysName" :renameId="renameId"></Rename>
      </div>
      
    </div>
</template>


<script>
import Rename from './tpl/Rename'

  export default {
  
    data () {
      return {
        modalRenameShow:false,
        metricName:'',
        sysName:'',
        renameId:'',
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
    },
    methods: {
    
      deleteHandle (e) {
        let itemId=e.target.dataset.id; 
        alert('删除'+itemId)
      },
      confirmHandle (e) {
        let itemId=e.target.dataset.id; 
        alert('确认'+itemId)
      },
      modalChange (e) {
       var _this=e.target;
       this.metricName=_this.dataset.metricName;       
       this.sysName=_this.dataset.sysName;
       this.renameId=_this.dataset.id;
      console.log('metricName:'+this.metricName+'sysName:'+this.sysName)
        this.$store.dispatch('RENAME_CHANGE_AC')
      }
    },
    computed: {
      modalRenameShow () {
        return this.$store.state.modalRenameShow
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
      }
    },
    components:{
      Rename
    }
            
  }
</script>
<style lang="scss">

  
  #monitor-item-node{
    position: relative;
    display: block;
    width: 100%;
    
    .monitor-item-box{
      
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
        
        tr{
          border-top:1px solid #dbdbdb;
          
          &.tr-title{
            font-weight: bold;
            font-size: 16px;

          }
          
          &:hover{
            color:black;
            cursor: pointer;
          }
        }
        th{

          &:hover{
            background: none;
          }
        }
        td{

          &:hover{
            background: none;
            color:black;
          }
        }
      }

    }
    
  }
</style>
