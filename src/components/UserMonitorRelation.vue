<!-- 用户监控项关系管理 -->

<template>
  <div id="user-monitor-relation-node">
    <div class="monitor-relation-box">
      <!-- use $on and $emit -->
      <h3 class="title is-3">
        用户组监控项关系管理
        <img src="../assets/images/add-metric.svg" @click="UserMonitorRelationHandle"  />
      </h3>
    </div>
    <div class="table-box">
      <table class="table">
        <thead>
        <tr>
          <th>用户组名称</th>
          <th>来源系统名称</th>
          <th>监控项</th>
          <th>操作</th>
        </tr>
        </thead>
        
        <tbody v-for="value in UserMonitorRelationData" >
        <tr class="tr-title">
          <td colspan="4">
            {{ value.GroupName }}
          </td>
        </tr>
        <template v-for="(val, key, index) in value.SysMetrics">
          <tr >
            <td>{{ value.GroupName }}</td>
            <td >{{ key }}</td>
            <td class="metric-box">
              <span v-for="v in val">
                <label class="radio">
                  <input type="radio" name="type" :value="v" v-model="picked">
                  {{v}}
                </label>
              </span>
            </td>
            <td>
              <a class="button is-small" 
                 :data-groupid="value.GroupId"
                 :data-key="key"
                 @click="deleteHandle">删除</a>
            </td>
          </tr>
        </template>
        </tbody>

      </table>
    </div>
    
    <div v-show="modalAddUserMonitorRelationShow">
      <AddUserMonitorRelation></AddUserMonitorRelation>
    </div>



  </div>
</template>


<script>
import AddUserMonitorRelation from './tpl/AddUserMonitorRelation'

  export default {
  
    data () {
      return {
        UserMonitorRelationData:null,
        modalAddUserMonitorRelationShow:false,
        
        picked:''
      }
    },
    computed: {
      UserMonitorRelationData () {
        return this.$store.state.UserMonitorRelationData
      },
      modalAddUserMonitorRelationShow () {
        return this.$store.state.modalAddUserMonitorRelationShow

      }
    },
    methods: {
      UserMonitorRelationHandle () {
        console.log(this.UserMonitorRelationData)
        this.$store.dispatch('ADD_MONITOR_RELATE_CHANGE_AC')
      
      },
      deleteHandle (e) {
      // 获取一些删除的需要的数据
        let _this=e.target;
        let groupId=_this.dataset.groupid;
        let key=_this.dataset.key;
        
      
        this.$store.dispatch({
          type:'DEL_USER_MONITOR_RELATION_AC',
          amount:{
            groupId:groupId,
            systemName:key,
            metric:this.picked //获取选中的radio
          
          }
        })
      }
    },
    components:{
      AddUserMonitorRelation
    },
    mounted () {
      this.$store.dispatch('GET_USER_MONITOR_RELATION_AC')
    }
            
  }
</script>

<style lang="scss">

  #user-monitor-relation-node{
    position: relative;
    display: block;
    width: 100%;

    .monitor-relation-box{
      img{
        width: 22px;
        height: auto;
        vertical-align: initial;
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
          max-width: 500px;

          &.metric-box{
            span{
              margin-right: 10px;
              display: inline-block;
              line-height: 20px;
              height: 20px;
              label{
                display: inherit;
                line-height: inherit;
                height: inherit;
              }

            }
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



