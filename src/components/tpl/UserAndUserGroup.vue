<!-- 用户组件 -->
<!-- 用户组组件 -->


<template>
  <div id="user-userGroup-node">
    <div class="user-userGroup-node-box">
      <!-- use $on and $emit -->
      <h3 class="title is-3">
        {{componentName}}管理
        <img src="../../assets/images/add-metric.svg" @click="addUsers"  />
      </h3>
    </div>
    <div class="table-box"  v-if="componentName=='用户'" >
      <table class="table">
        <thead>
        <tr>
          <th>姓名</th>
          <th>邮箱</th>
          <th>电话</th>
          <th>操作</th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="v in listData">
          <td>{{ v.Name }}</td>
          <td>{{ v.Mail }}</td>
          <td>{{ v.Phone }}</td>
          <td>
            <a class="button is-small" @click="deleteHandle" :data-id="v.Id">删除</a>
            <a class="button is-small" @click="updateHandle"
               :data-id="v.Id"
               :data-name="v.Name"
               :data-phone="v.Phone"
               :data-mail="v.Mail">修改</a>

          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="table-box" v-else>
      <table class="table">
        <thead>
        <tr>
          <th>用户组名称</th>
          <th>描述</th>
          <th>操作</th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="v in listData">
          <td>{{ v.Name }}</td>
          <td>{{ v.Describe }}</td>
          <td>
            <a class="button is-small" @click="deleteHandle" :data-id="v.Id">删除</a>
            <a class="button is-small" @click="updateHandle"
               :data-group="v.Name"
               :data-describe="v.Describe">修改</a>
          </td>
        </tr>
        </tbody>

      </table>
    </div>

    <template v-if="componentName=='用户'">
      <div v-show="modalAddShow">
        <AddUsers :componentName="componentName" v-on:modalChange="addUsers"></AddUsers>
      </div>
    </template>

    <template v-else>
      <div v-show="modalAddShow">
        <AddUsers :componentName="componentName" v-on:modalChange="addUsers"></AddUsers>
      </div>
    </template>
    
    <div v-show="modalUserUpdateShow">
      <UsersUpdate :componentName="componentName" 
                   :Name="Name"
                   :Email="Mail"
                   :Phone="Phone"
                   :GroupName="GroupName"
                   :Describe="Describe">
        
      </UsersUpdate>
    </div>

<!--modalUserUpdateShow -->
  </div>
</template>


<script>
import AddUsers from './AddUsers'
import UsersUpdate from './UsersUpdate'

  export default {
  /* componentName:用户,用户组 */
    props:['componentName','listData'],
  
    data () {
      return {
        modalAddShow:false,
        modalUserUpdateShow:false,
        
        Name:'',
        Mail:'',
        Phone:'',
        
        GroupName:'',
        Describe:''
      }
    },
    computed: {
      modalUserUpdateShow () {
        return this.$store.state.modalUserUpdateShow
      
      }
    },
    methods: {
    
      deleteHandle (e) {
              //通过componentName判定派发哪个actions
        let itemId=e.target.dataset.id; 
         if(this.componentName=='用户'){
           this.$store.dispatch({
             type:'DEL_USER_AC',
             amount:{
              id:itemId
             }
           }).then(
            res => {
              if(res.data.code==200){
                alert('删除成功！')
              }
            }
           )
         
         }else{
           this.$store.dispatch({
             type:'DEL_USER_GROUP_AC',
             amount:itemId
           })
         }
      },
      updateHandle (e) {
        var _this=e.target;
        this.Name=_this.dataset.name;       
        this.Mail=_this.dataset.mail;
        this.Phone=_this.dataset.phone;
        this.GroupName=_this.dataset.group;
        this.Describe=_this.dataset.describe;
        console.log('user:'+this.Name+'//'+this.Mail+'//'+this.Phone)
        console.log('userGroup:'+'//'+this.GroupName+'//'+this.Describe)
        this.$store.dispatch('USER_UPDATE_CHANGE_AC')
          
      },
      addUsers () {
        if(this.modalAddShow==false){
          this.modalAddShow=true
        }else{
          this.modalAddShow=false
        }
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
      AddUsers,
      UsersUpdate
    }
            
  }
</script>

<style lang="scss">

  #user-userGroup-node{
    position: relative;
    display: block;
    width: 100%;

    .user-userGroup-node-box{

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
