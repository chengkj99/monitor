<!-- 告警来源管理组件 -->


<template>
  <div id="alarm-node">
    <div class="condition">

      <div>
        <label class="label">开始时间：</label>
        <p class="control">
          <input class="input" type="date" placeholder="Text input">
        </p>
      </div>
      <div>
        <label class="label">结束时间：</label>
        <p class="control">
          <input class="input" type="date" placeholder="Text input">
        </p>
      </div>
      <div>
        <label class="label">节点：</label>
        <p class="control">
          <input class="input" type="text" placeholder="Text input">
        </p>
      </div>
      <div>
        <a class="button is-primary query" @click="queryHandle">查询</a>
      </div>


    </div>
    <div class="condition">
      <div>
        <label class="label">来源系统：</label>
        <p class="control">
          <span class="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </span>
        </p>
      </div>
      <div>
        <label class="label">监控项：</label>
        <p class="control">
          <span class="select">
            <select>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </span>
        </p>
      </div>
    </div>

    <table class="table">
      <thead>
      <tr>
        <th>告警来源系统</th>
        <th>告警节点</th>
        <th>监控项</th>
        <th>当前值</th>
        <th>阀值</th>
        <th>事件</th>
        <th>标题</th>
        <th>告警等级</th>
        <th>告警时间</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="obj in listData">
        <!--<td>{{ obj.Id }}</td>-->
        <td>{{ obj.SystemName }}</td>
        <td>{{ obj.Endpoint }}</td>
        <td>{{ obj.Metric }}</td>
        <td>{{ obj.Value }}</td>
        <td>{{ obj.BaseValue }}</td>
        <td>{{ obj.Title }}</td>
        <td>{{ obj.Level }}</td>
        <td>{{ obj.LastReportTime }}</td>
        <td>{{ obj.FirstReportTime }}</td>
        <td>
          <a class="button is-small">详情</a>
        </td>
      </tr>
      </tbody>
    </table>

    <div v-show="modalShow">
      <ModalBox></ModalBox>
    </div>
  </div>

</template>


<script>
import ModalHistory from './tpl/ModalHistory'
  export default {

  data () {
    return {
      name: 'alarm-source-node',
      modalShow:false,
      listData:[ 
      {
          Id: 9,
          Title: "title",
          AlarmId: "system_192.168.0.1_memory_used",
          SystemName: "system",
          Endpoint: "192.168.0.1",
          SubEndpoint: "",
          Metric: "memory_used",
          Value: "0.92",
          BaseValue: "0.8",
          Level: 1,
          AlarmContent: "test",
          FirstReportTime: "2016-11-15 20:48:01",
          LastReportTime: "2016-11-24 10:42:04"
      },
      {
          Id: 9,
          Title: "title",
          AlarmId: "system_192.168.0.1_memory_used",
          SystemName: "system",
          Endpoint: "192.168.0.1",
          SubEndpoint: "",
          Metric: "memory_used",
          Value: "0.92",
          BaseValue: "0.8",
          Level: 1,
          AlarmContent: "test",
          FirstReportTime: "2016-11-15 20:48:01",
          LastReportTime: "2016-11-24 10:42:04"
      },
      {
          Id: 9,
          Title: "title",
          AlarmId: "system_192.168.0.1_memory_used",
          SystemName: "system",
          Endpoint: "192.168.0.1",
          SubEndpoint: "",
          Metric: "memory_used",
          Value: "0.92",
          BaseValue: "0.8",
          Level: 1,
          AlarmContent: "test",
          FirstReportTime: "2016-11-15 20:48:01",
          LastReportTime: "2016-11-24 10:42:04"
      }
      ]
    }
  },
  methods: {
   queryHandle () {
     alert('query function!')
   },
   historyHandle () {
    console.log('history')
    this.modalShow=true;
   }
  },
  components:{
    'ModalBox': ModalHistory
   }
}
</script>

<style lang="scss">

  #alarm-source-node{
    
    .condition{
      position: relative;
      display: block;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-around;
      width: 100%;
      margin-bottom: 10px;
      
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


