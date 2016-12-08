<template>
  <div id="modal-rename" @click.self="modalChange" >
    <div class="container"  id="table-box" :style=" componentName=='用户' ? tableBoxStyle : tableBoxStyleTwo ">
      <!-- 监控项 -->
        <h3 class="title is-4">修改{{componentName}}名称</h3>


      <div v-if="componentName=='用户'">
        <div>
          <label class="label">姓名:</label>
          <p class="control">
            <input class="input" type="text"v-model="newName" placeholder="姓名">
          </p>
        </div>
        <div>
          <label class="label">邮箱:</label>
          <p class="control">
            <input class="input" type="text" v-model="newEmail" placeholder="邮箱">
          </p>
        </div>
        <div>
          <label class="label">电话:</label>
          <p class="control">
            <input class="input" type="text" v-model="newPhone" placeholder="电话">
          </p>
        </div>
      </div>

      <div v-else>
        <div>
          <label class="label">用户组名称:</label>
          <p class="control">
            <input class="input"  type="text"  v-model="newGroupName" placeholder="用户组名称">
          </p>
        </div>

        <div>
          <label class="label">描述:</label>
          <p class="control">
            <input class="input" type="text" v-model="newDescribe" placeholder="描述">
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
      props:['componentName','Id','Name','Email','Phone','GroupName','Describe'],
      data(){
        return{
          tableBoxStyle:{
           marginTop:(window.innerHeight-395)/2+"px",
           height:'395px'
          },          
          tableBoxStyleTwo:{
           marginTop:(window.innerHeight-320)/2+"px",
           height:'320px'
          },
          newName:'',
          newEmail:'',
          newPhone:'',
          newGroupName:'',
          newDescribe:''
          
        }
      },
      computed:{
        newName (){
          return this.Name
        },      
        newEmail (){
          return this.Email
        },          
        newPhone (){
          return this.Phone
        },      
        newGroupName (){
          return this.GroupName
        },
        newDescribe (){
          return this.Describe
        },
      },
      mounted () {
        console.log("保存:"+this.Name+'//'+this.Email+"//"+this.Phone+"//"+this.GroupName+"//"+this.Describe)
        console.log("保存:"+this.newName+'//'+this.newEmail+"//"+this.newPhone+"//"+this.newGroupName+"//"+this.newDescribe)
      },
      methods:{
        modalChange () {
          this.$store.dispatch('USER_UPDATE_CHANGE_AC')         
        },
        resetHandle () {
          console.log()
          this.newName='';
          this.newEmail='';
          this.newPhone='';
          this.newGroupName = '';
          this.newDescribe='';

        },
        saveHandle (e) {
        if(this.componentName=='用户'){
          this.$store.dispatch({
            type:'UPDATE_USER_AC',
            amount:{
              Id:Number(this.Id),
              Name:this.newName,
              Email:this.newEmail,
              Phone:this.newPhone
            }
          })
          console.log("user update data:",this.newName)
        }else{
          this.$store.dispatch({
            type:'UPDATE_USER_GROUP_AC',
            amount:{
              GroupName:this.newGroupName,
              Describe:this.newDescribe
            }
          })
        }

          alert("保存:"+this.newName+'//'+this.newEmail+"//"+this.newPhone+"//"+this.newGroupName+"//"+this.newDescribe)
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
            >input{

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

