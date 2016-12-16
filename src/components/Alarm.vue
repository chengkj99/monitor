<!-- 报警组件 -->

<template>
    <div id="alarm-node">
      <div class="monitor-alarm-box">
        <h3 class="title is-3">
          报警信息管理
        </h3>
      </div>
      
      <div class="condition">
        <div>
          <label class="label">告警来源系统：</label>
          <p class="control">
          <span class="select">
            <select v-model="sysName">
              <option v-for="val in selectSysName" >
                {{val.SystemName}}
              </option>
            </select>
          </span>
          </p>
        </div>
        <div>
          <label class="label">监控节点：</label>
          <p class="control">
            <input class="input" type="text" v-model="endpoint" placeholder="监控节点">
          </p>
        </div>
        <div>
          <label class="label" >监控项：</label>
          <p class="control">
          <span class="select">
            <select v-model="metricName">
              <option v-for="val in selectMetric" >
                {{ val.MetricName }}
              </option>
            </select>
          </span>
          </p>
        </div>
        <div>
          <a class="button is-primary query" @click="queryHandle">查询</a>
        </div>
      </div>
      
      <table class="table">
        <thead>
        <tr>
          <th>告警来源系统</th>
          <th>监控节点</th>
          <th>监控子节点</th>
          <th>监控项</th>
          <th>值</th>
          <th>阀值</th>
          <th>告警等级</th>
          <th>最后告警时间</th>
          <th>初次告警时间</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="obj in listData">
          <td>{{ obj.SystemName }}</td>
          <td>{{ obj.Endpoint }}</td>
          <td>{{ obj.SubEndpoint }}</td>
          <td>{{ obj.Metric }}</td>
          <td>{{ obj.Value }}</td>
          <td>{{ obj.BaseValue }}</td>
          <td>{{ obj.Level }}</td>
          <td>{{ obj.LastReportTime }}</td>
          <td>{{ obj.FirstReportTime }}</td>
          <td>
            <a class="button is-small" @click="historyHandle"  :data-sytem-name="obj.SystemName" :data-metric="obj.Metric" :data-endpoint="obj.Endpoint" :data-sub-endpoint="obj.SubEndpoint">查看历史</a>
            <a class="button is-small" @click="detailsHandle"  :data-id="obj.Id">详情</a>
            <!--<router-link class="button is-small" to="/Blacklist">黑名单</router-link>-->
            <a class="button is-small" @click="addBlacklist" :data-system-name="obj.SystemName" :data-metric="obj.Metric" :data-endpoint="obj.Endpoint" :data-sub-endpoint="obj.SubEndpoint">加黑</a>
            <a class="button is-small" @click="restoreHandle" :data-id="obj.Id">恢复</a>
          </td>
        </tr>
        </tbody>
      </table>
      <div id="page">
        <zpagenav :page="page" :page-size="pageSize" :total="total" :max-link="maxLink" :page-handler="pageHandler" :create-url="createUrl"></zpagenav>
      </div>



      <div v-show="modalShow">
        <ModalHistory></ModalHistory>
      </div>
      <div v-show="modalDetailsShow">
        <ModalDetails></ModalDetails>
      </div>
       <template v-if="blackshow">
          <AddBacklistForAlarm
            :SystemName="sysName" 
            :MetricName="metricName" 
            :Endpoint="endpoint"
           :SubEndpoint="subEndpoint" 
           v-on:modalChange="showAddBlacklist">
           </AddBacklistForAlarm>
       </template>
      
    </div>

</template>


<script>
import ModalHistory from './tpl/ModalHistory'
import ModalDetails from './tpl/ModalDetails'
import AddBacklistForAlarm from './tpl/AddBacklistForAlarm'
  export default {
  data () {
    return {
      name: 'alarm-node',
      selectSysName:[],
      selectMetric:[],
      blackshow:false,

      sysName:'',
      endpoint:'',
      metricName:'',
      subEndpoint:'',


      
      page: 1, //page,pageSize: 10 
      pageSize:10, // default is 10
      total: 509, //total item count
      maxLink: 5, //how many links to show, must not less than 5,  default is 5
        
      
      modalShow: false,
      modalDetailsShow: false,
      listData:[]
    }
  },
  watch: {
    sysName (val) {
      this.$http.get('/api/v1/metric/search?systemName='+val).then((res) => {
          this.selectMetric=res.data;
          console.log('selectMetric:::',this.selectMetric)
          
      }).then(
        (res) => {
          console.log('error res:::'+res)
        });  
    }
  },
  computed: {
    modalShow () {
      return this.$store.state.modalShow
    },
    modalDetailsShow () {
      return this.$store.state.modalDetailsShow
    },
    listData () {
      return this.$store.state.AlarmData
    },
    selectSysName () {
      return this.$store.state.SystemNameData
    }
  },
  mounted () {
    this.$store.dispatch('GET_ALARM_AC').then((res) =>{
      this.total= res.data.length
    })
  },
  methods: {
    addBlacklist(e){
      this.sysName = e.target.dataset.systemName
      this.metricName = e.target.dataset.metric
      this.endpoint = e.target.dataset.endpoint
      this.SubEndpoint = e.target.dataset.subEndpoint
      console.log(this.sysName)
      console.log(this.metricName)
      console.log(this.endpoint)
      console.log(this.SubEndpoint)
      this.showAddBlacklist()
    },
    showAddBlacklist(){
      if(!this.blackshow){
        this.blackshow = true
      }else{
        this.blackshow= false
      }
    },
    queryHandle (e) {
      this.$store.dispatch({
        type:'QUERY_ALARM_AC',
        amount:{
          systemName:this.sysName,
          endpoint:this.endpoint,
          metric:this.metricName,
          size:this.pageSize,
          start:0
        }
      }).then((res)=>{
        this.total= res.data.length
      })
    },
    historyHandle (e) {     
      let aimID=e.target.dataset.id
      
      let SystemName = e.target.dataset.sytemName
      let Metric = e.target.dataset.metric
      let Endpoint = e.target.dataset.endpoint
      let SubEndpoint = e.target.dataset.subEndpoint
      let params = {
        SystemName:SystemName,
        Metric:Metric,
        Endpoint:Endpoint,
        SubEndpoint:SubEndpoint
      }
      this.$store.dispatch('MODAL_CHANGE_AC')
      this.$store.dispatch({
        type:'HISTORY_ALARM_AC',
        amount:params
      })
    },
    detailsHandle (e) {
      let aimID=e.target.dataset.id
      this.$store.dispatch('DETAILS_CHANGE_AC')
      this.$store.dispatch({
        type:'DETAILS_ALARM_AC',
        amount:aimID
      })
    },
    restoreHandle (e) {
      let aimID=e.target.dataset.id
      this.$store.dispatch({
        type:'RESTORE_ALARM_AC',
        amount:{
          id:aimID
        }
      })
    },
    
    pageHandler (page) {
      //here you can do custom state update  
      this.page = page
      let totalNow = this.pageSize * this.page +1
      this.$store.dispatch({
        type:'QUERY_ALARM_AC',
        amount:{
          systemName:this.sysName,
          endpoint:this.endpoint,
          metric:this.metricName,
          size:this.pageSize,
          start:totalNow
        }
      }).then((res)=>{
        this.total= res.data.length
      })
    },
    createUrl (unit) {
      return unit.page > 1?'#page=' + unit.page:'#'
    }
  
  },
  components:{
    ModalHistory,
    ModalDetails,
    AddBacklistForAlarm  
   }
}
</script>

<style lang="scss">

  #alarm-node{

    .monitor-alarm-box{

      h3{
        img{
          width: 22px;
          height: auto;
        }
      }
    }
    
    .condition{
      position: relative;
      display: block;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
      width: 100%;
      margin: 20px 0px 10px 0px;

      >div{
        display: inline-block;
        margin-right: 12px;

        >label{
          display: inline-block;
          height: 30px;
          line-height: 30px;
          vertical-align: bottom;
          margin: 0;

        }
        >p{

          display: inline-block;
          >input{
            display: inline-block;
            width: 160px;
            box-sizing: content-box;
            height: 30px;

          }
          >span{

            >select{
              display: inline-block;
              width: 200px;
              height: 30px;
              box-sizing: content-box;
            }
          }

        }

        .query{
          position: absolute;
          top: 0;
          RIGHT: 0;
          width: 100px;
        }
      }
    }

    .table{
      box-shadow: 0px 0px 5px #ccc;
      margin-top: 30px;

      tr{
        th{
          /* width: 105px; */
          white-space:nowrap;
        }

      }
    }
  }

</style>

