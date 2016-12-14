<template>
  <div id="modal-rename" @click.self="modalChange" >
    <div class="container"  id="table-box" :style=" tableBoxStyle ">
     <!-- 监控项 -->
      <template v-if="componentName=='监控项'">
        <h3 class="title is-4">修改{{componentName}}名称</h3>
      </template>
      <!-- 系统来源 -->
      <template v-else>
        <h3 class="title is-4">修改系统来源名称</h3>
      </template>
      
      <div v-if="componentName=='监控项'">
        <div>
          <label class="label">旧监控项名称:</label>
          <p class="control">
            <input class="input" type="text" disabled="disabled" v-model="oldNames" placeholder="旧监控项名称">
          </p>
        </div>

        <div>
          <label class="label">新监控项名称:</label>
          <p class="control">
            <input class="input" type="text" v-model="newName" placeholder="新监控项名称">
          </p>
        </div>
      </div>
      
      <div v-else>
        <div>
          <label class="label">旧系统名称:</label>
          <p class="control">
            <input class="input"  type="text" disabled="disabled" v-model="oldNames" placeholder="旧系统名称">
          </p>
        </div>

        <div>
          <label class="label">新系统名称:</label>
          <p class="control">
            <input class="input" type="text" v-model="newName" placeholder="新系统名称">
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
      props:['componentName','metricName','sysName','renameId'],
      data(){
        return{
          tableBoxStyle:{
           marginTop:(window.innerHeight-window.innerHeight*0.47)/2+"px"
          },
          oldName:'',
          newName:'',
        }
      },
      computed:{
      /* 改出始名 不然会报警告 */
        oldNames () {
          if(this.componentName=='监控项'){
            this.oldName=this.metricName
          }
          else{
            this.oldName=this.sysName
          }
          return this.oldName;
        }
      },
      methods:{
        modalChange () {
          this.$store.dispatch('RENAME_CHANGE_AC')         
        },
        resetHandle () {
          this.newName='';
        },

        //来源系统
        handleSys(e){
          console.log('this.newName1',this.newName)
             if(this.newName ==''){
              alert('新的来源系统名称为空是不对的')
              return
            }
            if (this.oldName == this.newName){
              alert('新旧名称不能相同')
              return
            }
            //提示是否继续rename
           let isConfirm = confirm("确定要将"+this.oldName+"替换为:"+this.newName+"?系统将同时更新告警历史、快照以及黑名单告警规则中的系统来源名称为您输入的新的名称")
           if (!isConfirm){
             return
           }
           console.log('this.newName2',this.newName)
                //校验systemName是否存在
           this.$store.dispatch({
                      type:'EXIST_ALARM_SOURCE_AC',
                      amount:{
                          systemName:this.newName
                      }
             }).then(
             (res)=>{
                  if (res.data.code ==400001){
                   alert("suc 已经存在systemname")
                  }
             },
             (res)=>{
               if (res.data.code ==400001){
                   let isContinue = confirm("警告！您输入的新的系统来源名称已经存在，确定继续更新？继续将会更新告警历史、快照以及黑名单告警规则中的系统来源名称为您输入的新的名称，并同时删除旧的来源系统名称")
                    if (!isContinue){
                return 
                }
               }
          }
           ).then(
              () => {
                if(this.componentName=='告警来源系统'){
                  this.$store.dispatch({
                      type:'RENAME_ALARM_SOURCE_AC',
                      amount:{
                        nameOld:this.oldName,
                        nameNew:this.newName
                      }
                  })
                }else{
                  this.$store.dispatch({
                      type:'UPDATE_MONITOR_ITEM_AC',
                      amount:{
                        systemName:this.sysName,
                        nameOld:this.oldName,
                        nameNew:this.newName
                      }
                  })
                }
              }
           )
        },
        handleMetric(){
           if(this.newName ==''){
              alert('新的来源系统名称为空是不对的')
              return
            }
            if (this.oldName == this.newName){
              alert('新旧名称不能相同')
              return
            }
            //提示是否继续rename
           let isConfirm = confirm("确定要将"+this.oldName+"替换为:"+this.newName+"?系统将同时更新告警历史、快照以及黑名单告警规则中的监控项名称为您输入的新的名称")
           if (!isConfirm){
             return
           }
              //校验systemName是否存在
                  this.$store.dispatch({
                      type:'EXIST_MONITOR_ITEM_AC',
                      amount:{
                          systemName:this.sysName,
                          metricName:this.newName
                      }
                  }).then(
                    (res)=>{
                        
                    },
                    (res)=>{
                        if (res.data.code ==400001){
                          let isContinue = confirm("警告！您输入的新的监控项名称已经存在，确定继续更新？继续将会更新告警历史、快照以及黑名单告警规则中的监控项名称为您输入的新的名称，并同时删除旧的监控项名称")
                          if (!isContinue){
                            return 
                          }
                        }
                    }
           ).then(
              () => {
                  this.$store.dispatch({
                      type:'RENAME_MONITOR_ITEM_AC',
                      amount:{
                        systemName:this.sysName,
                        nameOld:this.oldName,
                        nameNew:this.newName
                      }
                  })
              }
           )
        },
        saveHandle (e) {
          if(this.componentName=='告警来源系统'){
            this.handleSys(e)
          }else{
            this.handleMetric(e)
          }
         
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
      height: 315px;
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

