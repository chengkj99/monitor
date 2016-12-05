<!-- 用户组用户关系管理组件 -->

<template>
  <div id="monitor-alarm-node">
    <div class="monitor-alarm-box">
      <!-- use $on and $emit -->
      <h3 class="title is-3">
        用户组用户关系管理管理
        <img src="../assets/images/add-metric.svg" @click="addUserRelation"  />
      </h3>
      
    </div>
    <div class="table-box">
      <table class="table">
        <thead>
        <tr>
          <th>用户组名称</th>
          <th>用户名</th>
          <th>邮箱</th>
          <th>电话</th>
          <th>操作</th>
        </tr>
        </thead>

        <tbody v-for="val in UserRelationData" >
        <tr class="tr-title">
          <td colspan="6">
            {{val.GroupName}}
            <!--<img src="../assets/images/add-metric.svg" @click="addUserRelation"  />-->
          </td>
        </tr>

        <tr v-for="v in val.Users">
          <td>{{ val.GroupName }}</td>
          <td>{{ v.Name }}</td>
          <td>{{ v.Mail }}</td>
          <td>{{ v.Phone }}</td>
          <td>
            <a class="button is-small" @click="deleteHandle"
               :data-id="v.Id"
               :data-groupid="val.GroupId">删除</a>

          </td>
        </tr>
        </tbody>

      </table>
    </div>
    

    <div v-show="modalAddUserRelateShow">
      <AddUserRelation></AddUserRelation>
    </div>


  </div>
</template>


<script>
import Rename from './tpl/Rename'
import AddMonitorItem from './tpl/AddMonitorItem'
import AddUserRelation from './tpl/AddUserRelation'

  export default {
  /* componentName:监控项,来源系统 */
  
    data () {
      return {
        modalAddMonitorItemShow:false,
        
        metricName:'',
        sysName:'',
        renameId:'',
        
        GroupId:'',
        Id:'',
        modalAddUserRelateShow:false,
        
        UserRelationData:this.$store.state.UserRelationData
      }
    },
    methods: {
    
      deleteHandle (e) {
        let itemId=e.target.dataset.id;
        if(this.componentName=='监控项'){
          this.$store.dispatch({
            type:'DEL_MONITOR_ITEM_AC',
            amount:itemId
          })
        }else{
          this.$store.dispatch({
            type:'DEL_ALARM_SOURCE_AC',
            amount:itemId
          })
        }
        alert('删除'+itemId)
      },
      addUserRelation () {
        this.$store.dispatch('ADD_USER_RELATE_CHANGE_AC')
      }
    },
    computed: {
      modalAddUserRelateShow () {
        return this.$store.state.modalAddUserRelateShow
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
      Rename,
      AddMonitorItem,
      AddUserRelation
    }
            
  }
</script>

<style lang="scss">

  #monitor-alarm-node{
    position: relative;
    display: block;
    width: 100%;

    .monitor-alarm-box{
      
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
          
          img{
            width: 15px;
            height: auto;
            vertical-align: initial;
          }

          &:hover{
            background: none;
            color:black;
          }
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
