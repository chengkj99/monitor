<!-- 添加用户组监控项关系 组件 -->


<template>
  <div id="modal－update-attendance" @click.self="modalChange" >
    <div class="container"  id="table-box" :style=" tableBoxStyle " >
      <h3 class="title is-4">添加值班</h3>

      <div>
        <div>
          <label class="label">用户组名称＊</label>
          <p class="control">
            <span class="select" >
              <select v-model="GroupName" @blur="groupSelectBlurHandle">
                <option v-for="val in UserGroupData"  :mark="val.Id">
                  {{val.Name}}
                </option>
              </select>
            </span>
          </p>
        </div>
        <div>
          <label class="label">时间＊</label>
          <p class="control">
            <input class="input" type="date" v-model="dateTime">
          </p>
        </div>
        <div>
          <label class="label">责任人＊</label>
          <p class="control">
            <span class="select" >
              <select v-model="Duty">
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
              <select v-model="Backup">
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
              <select v-model="Charge">
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
      data(){
        return{
        
          tableBoxStyle:{
           marginTop:(window.innerHeight-500)/2+"px",
           height:"500px"
          },        
          UserGroupData:[],
          UserData:[],
          
          GroupName:'',
          dateTime:'',
          Duty:'',
          Backup:'',
          Charge:'',
          
          GroupId:'',
          Id:'',
        }
      },
      watch:{
       GroupName(val){
          this.$http.get('/api/v1/usergroup/usersgname?groupName='+val).then((res) => {
          this.UserData=res.data;
         }, 
         (res) => {
          console.log('error res:::'+res)
         });  
       }
      },
      computed:{
        UserGroupData () {
          return this.$store.state.UserGroupData;
        },            
        // UserData () {
        //   return this.$store.state.UserData;
        // }
      },
      mounted(){
        this.$store.dispatch('GET_USER_GROUP_AC')
      },
      methods:{
        modalChange () {
          this.$store.dispatch('ADD_USER_ATTENDANCE_CHANGE_AC')
        },
        saveHandle () {
          /**
          校验数据非空
          **/
          if(this.GroupName == ''){
            alert('小组名称不能为空！')
            return
          }
          if(this.dateTime == ''){
            alert('值班时间不能为空')
            return
          }
          if(this.Duty == ''){
            alert('责任人不能为空')
            return
          }
          if(this.Backup == ''){
            alert('第二责任人不能为空')
            return
          }
          if (this.Charge == ''){
            alert('负责人不能为空')
            return
          }

          this.$store.dispatch({
            type:'ADD_USER_ATTENDANCE_AC',
            amount:{
              GroupName:this.GroupName,
              Date:this.dateTime,
              Duty:this.Duty,
              Backup:this.Backup,
              Charge:this.Charge,
            }
          }).then(
            (res)=>{ this.$store.dispatch('ADD_USER_ATTENDANCE_CHANGE_AC')}
          )
        },
        resetHandle () {
          this.Name='';
          this.GroupName='';
        },

        groupSelectBlurHandle (e) {
          let _this=e.target
          let targetIndex=_this.selectedIndex;
          let groupId=_this.options[targetIndex].getAttribute('mark')
           this.GroupId=groupId
           console.log(this.GroupId)
        }
      }
    }
</script>

<style lang="scss">
  @import "../../assets/css/style";


  #modal－update-attendance{
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
      width: 385px;
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
          margin-bottom: 10px;

          label{
            color:white;
          }
          label.radio{
            margin-left: 0;
            width: 48%;
          }

          p{
            display:block;
            width: 100%;
            span {
              display: block;
              position: relative;
              select{
                display: block;
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

    #multi-select-box{
      span{
        display: inline-block;
      }

      .multiselect__content{

        span{
          display: block;
        }
        position:fixed;
        width: 307px;
      }
      .multiselect__tags{

        height: 100px;
      }
    }

  }
</style>

