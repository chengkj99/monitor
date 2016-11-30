<template>
  <div id="modal-rename" @click.self="modalChange" >
    <div class="container"  id="table-box" :style=" tableBoxStyle ">
      <h3 class="title is-4">修改监控项名称</h3>
      <div>
        <div>
          <label class="label">旧监控项名称:</label>
          <p class="control">
            <input class="input" type="text" v-model="oldName" placeholder="旧监控项名称">
          </p>
        </div>

        <div>
          <label class="label">新监控项名称:</label>
          <p class="control">
            <input class="input" type="text" v-model="newName" placeholder="新监控项名称">
          </p>
        </div>
      </div>
      <div class="renameDo">
        <a class="button">重置</a>
        <a class="button" @click="saveHandle">保存</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
      props:['metricName','sysName','renameId'],
      data(){
        return{
          tableBoxStyle:{
           marginTop:(window.innerHeight-window.innerHeight*0.47)/2+"px"
          },
          oldName:'',
          newName:''
        }
      },
      methods:{
        getMessage () {
          let msg;
          if(this.message='chengkangjian'){
            msg='KANGJIANCHENG';
          }
          return msg;
        },
        modalChange () {
          this.$store.dispatch('RENAME_CHANGE_AC')         
        },
        saveHandle (e) {
          alert('保存')
          alert(this.metricName+'//'+this.sysName+"//"+this.renameId)
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
      width: 30%;
      position: relative;
      display: block;
      height: 47%;
      overflow: auto;
      margin: auto;
      background-color: black;
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

