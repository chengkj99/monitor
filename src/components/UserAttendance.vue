<!-- 值班管理 -->

<!-- 用户监控项关系管理 -->

<template>
  <div id="user-monitor-relation-node">
    <div class="monitor-relation-box">
      <!-- use $on and $emit -->
      <h3 class="title is-3">
        值班管理
        <img src="../assets/images/add-metric.svg" @click="AddUserAttendanceHandle"  />
      </h3>
    </div>
    <div class="table-box">
      <table class="table">
        <thead>
        <tr>
          <th>小组名称</th>
          <th>日期</th>
          <th>责任人</th>
          <th>第二责任人</th>
          <th>负责人</th>
          <th>操作</th>
        </tr>
        </thead>

        <tbody v-for="value in UserAttendanceData" >
          <tr >
            <td>{{ value.GroupName }}</td>
            <td>{{ value.Date }}</td>
            <td>{{ value.Duty }}</td>
            <td>{{ value.Backup }}</td>
            <td>{{ value.Charge }}</td>
            <td>
              <a class="button is-small"
                 :data-id="value.Id"
                 :data-group-name="value.GroupName"
                 :data-date="value.Date"
                 :data-duty="value.Duty"
                 :data-backup="value.Backup"
                 :data-charge="value.Charge"
                 @click="updateHandle">修改</a>
            </td>
          </tr>
        </tbody>

      </table>
    </div>

    <div v-show="modalAddUserAttendanceShow">
      <AddUserAttendance></AddUserAttendance>
    </div>    
    <div v-show="modalUserAttendanceUpdateShow">
      <UserAttendanceUpdate
        :Id="Id"
        :GroupName="GroupName" 
        :DateTime="DateTime"
        :Duty="Duty"
        :Backup="Backup"
        :Charge="Charge"
      >
        
      </UserAttendanceUpdate>
    </div>



  </div>
</template>


<script>
import AddUserAttendance from './tpl/AddUserAttendance'
import UserAttendanceUpdate from './tpl/UserAttendanceUpdate'

  export default {
  
    data () {
      return {
        UserAttendanceData:null,
        modalAddUserAttendanceShow:false,
        modalUserAttendanceUpdateShow:false,
        
        picked:'',
        
        Id:'',
        GroupName:'',
        DateTime:'',
        Duty:'',
        Backup:'',
        Charge:''
      }
    },
    computed: {
      UserAttendanceData () {
        return this.$store.state.UserAttendanceData
      },
      modalAddUserAttendanceShow () {
        return this.$store.state.modalAddUserAttendanceShow
      },
      modalUserAttendanceUpdateShow () {
        return this.$store.state.modalUserAttendanceUpdateShow
      }
    },
    methods: {
      AddUserAttendanceHandle () {
        console.log(this.UserMonitorRelationData)
        this.$store.dispatch('ADD_USER_ATTENDANCE_CHANGE_AC')
      
      },
      updateHandle (e) {
        let _this=e.target;
        this.Id=_this.dataset.id;
        this.GroupName=_this.dataset.groupName;
        this.DateTime=_this.dataset.date;
        this.Duty=_this.dataset.duty;
        this.Backup=_this.dataset.backup;
        this.Charge=_this.dataset.charge;
        console.log('this.GroupName:'+this.GroupName)
        console.log('this.DateTime:'+this.DateTime)
        console.log('this.Duty:'+this.Duty)
        console.log('this.Backup:'+this.Backup)
        console.log('this.Charge:'+this.Charge)
        this.$store.dispatch('USER_ATTENDANCE_UPDATE_CHANGE_AC',
        )
      }
    },
    components:{
      AddUserAttendance,
      UserAttendanceUpdate
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



