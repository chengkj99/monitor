<!-- 添加升级规则组件 -->


<template>
  <div id="modal-add-rule" @click.self="modalChange" >
    <div class="container"  id="table-box" :style="typePicked<=2 ? tableBoxStyleTwo : tableBoxStyle" >
      <h3 class="title is-4">添加{{componentName}}</h3>
      
      <div>
        <div>
          <label class="label">来源系统＊</label>
          <!-- 升级规则：来源系统名称 select -->
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

        <!-- 升级规则：监控项名称 select -->
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
        
        <!-- 升级规则：类型 select
         1：按持续时间，2：按持续次数3：按时间段内次数4：按时间段内比值
         -->
        
        <div>
          <p class="control">
            <label class="radio">
              <input type="radio" name="type" value="1" v-model="typePicked">
              持续一段时间
            </label>
            <label class="radio">
              <input type="radio" name="type" value="2"  v-model="typePicked">
              持续一定次数
            </label>
            <label class="radio"> 
              <input type="radio" name="type" value="3" v-model="typePicked">
              一段时间达到次数
            </label>
            <label class="radio">
              <input type="radio" name="type" value="4" v-model="typePicked">
              一段时间达到比率
            </label>
          </p>
        </div>
        <div v-show="typePicked!='2'">
          <label class="label" >判定时间段＊</label>
          <p class="control">
            <span class="select" >
              <select v-model="periodData">
                <option v-for="val in PeriodSelect" >
                  {{val}}
                </option>
              </select>
            </span>
          </p>
        </div>
        <div v-show="typePicked!='1'">
          <label class="label" >数值＊</label>
          <p class="control">
            <input class="input" @blur="checkNumber" :style="valueState ? '': borderTips " 
                   type="text" v-model="value" placeholder="数值">
          </p>
        </div>

        <div>
          <label class="label" >原始级别＊</label>
          <p class="control">
            <span class="select" >
              <select v-model="originalLevel">
                <option v-for="val in levelSelect" >
                  {{val}}
                </option>
              </select>
            </span>
          </p>
        </div>
        <div>
          <label class="label" >要升到的级别＊</label>
          <p class="control">
            <span class="select" >
              <select v-model="upgradeLevel">
                <option v-for="val in levelSelectUp" >
                  {{val}}
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
      props:['componentName'],
      data(){
        return{
        
          tableBoxStyle:{
           marginTop:(window.innerHeight-615)/2+"px",
           height:"615px"
          },
          tableBoxStyleTwo:{
           marginTop:(window.innerHeight-550)/2+"px",
           height:"550px"
          },
          borderTips:{
            borderColor:"red"
          },
          systemName:'', //系统来源名称
          metricName:'', //监控项名称
          typePicked:'1', //选择类型
          periodData:'',
          originalLevel:'1',
          upgradeLevel:'3',
          value:0,
          
          valueState:true,

          levelSelect:['1','3','5','7'], 
          levelSelectUp:['3','5','7'],
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
        originalLevel: function (val,oldVal) {
          console.log('originalLevel::::new: %s, old: %s', val, oldVal)
          this.levelSelectUp=this.levelSelectUp.filter( (it) => {
            if(it>this.originalLevel){
              return it;
            }
          })
        },    
        upgradeLevel: function (val,oldVal) {
          console.log('upgradeLevel:::new: %s, old: %s', val, oldVal)
        }
      },
      computed:{
        levelSelectUpCom () {
          
        }
      },
      methods:{
        modalChange () {
          this.$emit('modalChange')       
        },
        saveHandle (e) {
        
          let newPeriodData=Number(this.periodData.split('h')[0])*3600;
          this.$store.dispatch({
            type:'ADD_BACK_LIST_AC',
            amount:{
              SystemName:this.systemName,
              Metric:this.metricName,
              Type: this.typePicked, 
              Period: newPeriodData,  
              Value: this.value, 
              TargetLevel: this.upgradeLevel
            }
          })
          alert('保存'+this.systemName+'--'
          +this.metricName+'---'
          +this.typePicked+''+'---'
          +this.periodData+''+'---'
          +this.value+''+'---'
          +this.originalLevel+''+'---'
          +this.upgradeLevel+''+'---' 
          )
        },
        resetHandle () {
          this.systemName='';
          this.metricName='';
          this.typePicked='1';
          this.periodData='';
          this.originalLevel='';
          this.upgradeLevel='';
          this.value=''
        },
        checkNumber () {
          let regTextNumber = /^(\d)*$/;   
          let isNumber=regTextNumber.test(this.value);
          if(!isNumber){
            alert('请输入阿拉伯数字!') 
            this.valueState=false;
          }else{
             this.valueState=true;
          }
        }
        
      }
    }
</script>

<style lang="scss">
  @import "../../assets/css/style";


  #modal-add-rule{
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

