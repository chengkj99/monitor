<!-- 添加用户 组件 -->


<template>
  <div id="modal-add-users" @click.self="modalChange" >
    <div class="container"  id="table-box" :style="componentName=='用户' ? tableBoxStyle : tableBoxStyleTwo" >
      <h3 class="title is-4">添加{{componentName}}</h3>

      <template v-if="componentName=='用户'">
        <div>
          <div>
            <label class="label">姓名＊</label>
            <p class="control">
              <input class="input" type="text" v-model="Name" placeholder="姓名">
            </p>
          </div>

          <div>
            <label class="label">邮箱＊</label>
            <p class="control">
              <input class="input" type="text" v-model="Mail" placeholder="邮箱">
            </p>
          </div>
          <div>
            <label class="label">电话＊</label>
            <p class="control">
              <input class="input" type="text" v-model="Phone" placeholder="电话">
            </p>
          </div>
        </div>
        
      </template>
      
      
      <template v-else>
        <div>
          <div>
            <label class="label">用户组名称＊</label>
            <p class="control">
              <input class="input" type="text" v-model="GroupName" placeholder="用户组名称">
            </p>
          </div>

          <div>
            <label class="label">描述</label>
            <p class="control">
              <textarea class="textarea" v-model="Describe" placeholder="描述"></textarea>
            </p>
          </div>
        </div>
      </template>

      
      <div class="renameDo">
        <a class="button" @click="resetHandle">重置</a>
        <a class="button" @click="saveHandle">保存</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
      props:['componentName'],
      data(){
        return{
        
          tableBoxStyle:{
           marginTop:(window.innerHeight-365)/2+"px",
           height:"365px"
          },          
          tableBoxStyleTwo:{
           marginTop:(window.innerHeight-385)/2+"px",
           height:"385px"
          },
          
          Name:'',
          Mail:'',
          Phone:'',
          
          GroupName:'',
          Describe:''
          
        }
      },
      watch:{

      },
      computed:{
        
      },
      methods:{
        isNumber (val) {
          return typeof val === 'number' && isFinite(val);
        },
        modalChange () {
          this.$emit('modalChange')       
        },
        saveHandle (e) {
        
        if(this.componentName=='用户'){
          this.$store.dispatch({
            type:'ADD_USER_AC',
            amount:{
              Name:this.Name,
              Mail:this.Mail,
              Phone:this.Phone
            }
          })
        }else{
          this.$store.dispatch({
            type:'ADD_USER_GROUP_AC',
            amount:{
              Name:this.GroupName,
              Describe:this.Describe
            }
          })
          
        }


          alert('保存'+this.Name+'--'
          +this.Mail+'---'
          +this.Phone
          )
        },
        resetHandle () {
          this.Name='';
          this.Mail='';
          this.Phone='';          
        }
      }
    }
</script>

<style lang="scss">
  @import "../../assets/css/style";


  #modal-add-users{
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
            input[type='number']{
              display: inline-block;
              width: 205px;
              margin-right: 10px;
            }
            input[type='number']+span{
              display: inline-block;
              font-size: 18px;
              line-height: 32px;
              text-align: center;
            }
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

  }
</style>

