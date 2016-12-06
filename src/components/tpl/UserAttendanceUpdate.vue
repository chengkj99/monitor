<template>
  <div id="modal-rename" @click.self="modalChange" >
    <div class="container"  id="table-box" :style=" tableBoxStyle ">
      <!-- 值班 -->
      <h3 class="title is-4">修改值班信息</h3>


      <div>
        <div>
          <label class="label">小组名称＊</label>
          <p class="control">
            <input class="input" disabled="disabled" type="text" v-model="newGroupName">
          </p>
        </div>
        <div>
          <label class="label">时间＊</label>
          <p class="control">
            <input class="input"  disabled="disabled" type="date" v-model="newDateTime">
          </p>
        </div>
        <div>
          <label class="label">责任人＊</label>
          <p class="control">
            <span class="select" >
              <select v-model="newDuty">
                <option v-for="val in UserData" :data-groupId="val.Id" :mark="val.Id">
                  {{val.Name}}
                </option>
              </select>
            </span>
          </p>
        </div>
        <div>
          <label class="label">第二责任人＊</label>
          <p class="control">
            <span class="select" >
              <select v-model="newBackup">
                <option v-for="val in UserData" :data-groupId="val.Id" :mark="val.Id">
                  {{val.Name}}
                </option>
              </select>
            </span>
          </p>
        </div>
        <div>
          <label class="label">负责人＊</label>
          <p class="control">
            <span class="select" >
              <select v-model="newCharge">
                <option v-for="val in UserData" :data-groupId="val.Id" :mark="val.Id">
                  {{val.Name}}
                </option>
              </select>
            </span>
          </p>
        </div>

      </div>


      <div class="renameDo">
        <a class="button" @click="resetHandle">重置</a>
        <a class="button" @click="saveHandle">保存</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
      props:['Id','GroupName','DateTime','Duty','Backup','Charge'],
      data(){
        return{
          tableBoxStyle:{
           marginTop:(window.innerHeight-555)/2+"px",
           height:'555px'
          },
          
          UserGroupData:[],
          UserData:[],
          
          newId:'',
          newGroupName:'',
          newDateTime:'',
          newDuty:'',
          newBackup:'',
          newCharge:''
        }
      },
      computed:{
        UserGroupData () {
          return this.$store.state.UserGroupData
        },   
        UserData () {
          return this.$store.state.UserData
        },        
        
        newId () {
          return this.Id
        },          
        newGroupName () {
          return this.GroupName
        },        
        newDateTime () {
          return this.DateTime
        },        
        newDuty () {
          return this.Duty
        },        
        newBackup () {
          return this.Backup
        },        
        newCharge () {
          return this.Charge
        }
      },
      methods:{
        modalChange () {
          this.$store.dispatch('USER_ATTENDANCE_UPDATE_CHANGE_AC')         
        },
        resetHandle () {
          this.newName='';
        },
        saveHandle (e) {
          this.$store.dispatch({
            type:'UPDATE_USER_ATTENDANCE_AC',
            amount:{
              Id: this.newId,
              GroupName: this.newGroupName,
              Date: this.newDateTime,
              Duty: this.newDuty,
              Backup: this.newBackup,
              Charge: this.newCharge
              
            }
          })

        }
      }
    }
</script>

<style lang="scss">
  @import "../../assets/css/style";


  #modal-rename{
    position: fixed;
    background-color: rgba($background , 0.3);
    width: 100%;
    height: 100%;
    z-index: 5;
    color: white;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    .container{
      width: 350px;
      position: relative;
      display: block;
      overflow: auto;
      margin: auto;
      background-color: $background;
      -webkit-border-radius: 7px;
      -moz-border-radius: 7px;
      border-radius: 7px;
      padding: 10px 0px 30px 0px;

      h3{
        text-align: left;
        border-bottom: 1px solid white;
        color: white;
        height: 50px;
        line-height: 50px;
        padding-left: 20px;
      }

      >div{
        position: relative;
        display: block;
        width: 80%;
        text-align: left;
        margin: auto;

        >div{
          margin-bottom: 20px;

          label{
            color:white;
          }
          p{
            >span{
              display: block;
              select{
                width: 100%;
                
              }
            }
          }
        }

      }

      .renameDo{
        padding-top: 20px;;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;

        >a{
          width: 45%;
        }
      }
    }

  }
</style>

