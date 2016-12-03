<!-- 添加监控项组件 添加来源系统组件 -->

<template>
  <div id="modal-add-monitor" @click.self="modalChange" >
    <div class="container"  id="table-box" :style=" componentName=='监控项' ? tableBoxStyle : tableBoxStyleTwo" >
      <h3 class="title is-4">添加{{componentName}}</h3>
      <div>
        <div>
          <label class="label">来源系统＊</label>
          <!-- 监控项 select -->
          <p class="control" v-if="componentName=='监控项'">
            <span class="select" >
              <select v-model="SystemName">
                <option v-for="val in selectData" >{{val}}</option>
              </select>
            </span>
          </p>
          <!-- 来源系统 input -->
          <p class="control" v-else>
            <input class="input" type="text" v-model="SystemName" placeholder="来源系统名称">
          </p>
        </div>

        <!-- 监控项 only-->
        <div v-if="componentName=='监控项'">
          <label class="label" >监控项名称＊</label>
          <p class="control">
            <input class="input" type="text" v-model="metricName" placeholder="监控项名称">
          </p>
        </div>
        
        <div>
          <label class="label">描述</label>
          <p class="control">
            <!-- 监控项 -->
            <textarea class="textarea" v-model="alarmContent" placeholder="监控项描述"v-if="componentName=='监控项'"></textarea>
            <!-- 来源系统 -->
            <textarea class="textarea" v-model="alarmContent" placeholder="来源系统描述" v-else></textarea>
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
      props:['componentName'],
      data(){
        return{
        
          tableBoxStyle:{
           marginTop:(window.innerHeight-480)/2+"px",
           height: "480px"
          },
          tableBoxStyleTwo:{
           marginTop:(window.innerHeight-405)/2+"px",
           height: "405px"
          },
          SystemName:'',
          metricName:'',
          alarmContent:'',
          
          selectData:{
            Select1:'dropdown1',
            Select2:'dropdown2',
            Select3:'dropdown3'
          }
        }
      },
      methods:{
        modalChange () {
          this.$emit('modalChange')       
        },
        saveHandle () {
          if(this.componentName=='监控项'){
            this.$store.dispatch({
              type:'ADD_MONITOR_ITEM_AC',
              amount:{
                SystemName: this.SystemName,
                MetricName: this.metricName,
                Describe: this.alarmContent,
                ConfirmState:true
              }
            })
          }else{
            this.$store.dispatch({
              type:'ADD_ALARM_SOURCE_AC',
              amount:{
                SystemName: this.SystemName,
                Describe: this.alarmContent,
                ConfirmState:true
              }
            })
          }

        
          alert('保存'+this.SystemName+'--'+this.metricName+'---'+this.alarmContent);
        },
        resetHandle () {
          this.SystemName='';
          this.metricName='';
          this.alarmContent='';
        }
      }
    }
</script>

<style lang="scss">
  @import "../../assets/css/style";


  #modal-add-monitor{
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

