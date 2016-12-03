<!-- 添加黑名单组件 -->


<template>
  <div id="modal-add-backlist" @click.self="modalChange" >
    <div class="container"  id="table-box" :style="tableBoxStyle" >
      <h3 class="title is-4">添加{{componentName}}</h3>

      <div>
        <div>
          <label class="label">来源系统＊</label>
          
          <!-- 添加黑名单：来源系统名称 select -->
          <p class="control">
            <span class="select" >
              <select v-model="systemName">
                <option v-for="val in selectSysName" >
                  {{val}}
                </option>
              </select>
            </span>
          </p>
        </div>

        <!-- 添加黑名单：监控项名称 select -->
        <div>
          <label class="label" >监控项名称＊</label>
          <p class="control">
            <span class="select" >
              <select v-model="metricName">
                <option v-for="val in selectMetricName" >
                  {{val}}
                </option>
              </select>
            </span>
          </p>
        </div>

        <!-- 添加黑名单：告警节点名称  -->

        <div>
          <label class="label">监控节点名称＊</label>
          <p class="control">
            <input class="input" type="text" v-model="endpoint" placeholder="告警节点名称">
          </p>
        </div>

        <div>
          <label class="label">监控子节点名称＊</label>
          <p class="control">
            <input class="input" type="text" v-model="subEndpoint" placeholder="告警子节点名称">
          </p>
        </div>
        

        <div>
          <label class="label" >加黑时长＊</label>

          <template v-if="isCustom">
            <p class="control">
              <input class="input" type="number" v-model="periodData" placeholder="加黑时长">
              <span>hour</span>
            </p>
          </template>
          <template v-else>
            <p class="control" id="custom">
            <span class="select" >
              <select v-model="periodData">
                <option v-for="val in PeriodSelect" >
                  {{val}}
                </option>
                <option>自定义</option>
              </select>
            </span>
            </p>
          </template>
          
        </div>

        <div>
          <label class="label">加黑原因</label>
          <p class="control">
            <textarea class="textarea" v-model="reason" placeholder="加黑原因"></textarea>
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
           marginTop:(window.innerHeight-655)/2+"px",
           height:"655px"
          },
          
          systemName:'',
          metricName:'',
          endpoint:'',
          curTime:'',
          newTime:'',
          subEndpoint:'',
          periodData:'',
          reason:'',
          
          isCustom:false,
          
          PeriodSelect:['1h','2h','3h','4h','5h','6h','7h','8h','9h','10h',
          '11h','12h','13h','14h','15h','16h','17h','18h','19h','20h','21h',
          '22h','23h','24h'],
          selectSysName:{
            Select1:'SysName11',
            Select2:'SysName22',
            Select3:'SysName33'
          },          
          selectMetricName:{
            Select1:'MetricName111',
            Select2:'MetricName222',
            Select3:'MetricName333'
          },
          
        }
      },
      watch:{
        typePicked: function (val,oldVal) {
          console.log('new: %s, old: %s', val, oldVal)
        },
        periodData:function (val) {
        if(val=='自定义'){
          this.isCustom=true;
        }
        }
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

          let printTime=new Date();
          
          let curHour=printTime.getHours();
          let newHour=0;
          if(this.isNumber(this.periodData)){
             newHour=curHour+this.periodData;
          }else{
             newHour=curHour+Number(this.periodData.split('h')[0]);
          }
          
          
          let curDay=printTime.getDate();
          let newDay=0;
          
          if(newHour<24){
            newDay=curDay;
          }else if(newHour==24){
            newDay=curDay+1;
            newHour=0;
          }else{
            //Math.floor(0.60):向下取整  ％:取余
            newDay=curDay+Math.floor(newHour/24);
            newHour= newHour%24;
          }
          
          
          console.log('curHour:'+curHour+'---newHour:'+newHour)
          
          
          this.curTime=printTime.getFullYear() + '-' + printTime.getMonth() + '-'
          + curDay + ' ' + curHour + ':'+ 
          printTime.getMinutes() + ':' + printTime.getSeconds();
          
          this.newTime=printTime.getFullYear() + '-' + printTime.getMonth() + '-'
          + newDay + ' ' + newHour + ':'+ 
          printTime.getMinutes() + ':' + printTime.getSeconds();
          
          
          this.$store.dispatch({
            type:'ADD_BACK_LIST_AC',
            amount:{
             SystemName: this.systemName,
             Endpoint: this.endpoint,
             SubEndpoint: this.subEndpoint ,
             Metric: this.metricNam,
             BeginTime: this.curTime,
             EndTime: this.newTime,
             Reason: this.reason
            }
          })
          alert('保存'+this.systemName+'--'
          +this.metricName+'---'
          +this.periodData+''+'---'
          +this.endpoint+''+'---'
          +this.subEndpoint+"---"
          +this.reason+'==='
          +'curTime:'+this.curTime
          +'---'+'newTime:'
          +this.newTime
          )
        },
        resetHandle () {
          this.isCustom=false;
          this.systemName='';
          this.metricName='';
          
          this.endpoint='';
          this.curTime='';
          this.newTime='';
          
          this.subEndpoint=''
          this.periodData='';
          this.reason='';
          
        }
      }
    }
</script>

<style lang="scss">
  @import "../../assets/css/style";


  #modal-add-backlist{
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

