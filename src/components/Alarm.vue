<!-- 报警组件 -->

<template>
    <div id="alarm-node">
      <div class="condition">
        <div>
          <label class="label">告警来源系统：</label>
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
          <label class="label">告警节点：</label>
          <p class="control">
            <input class="input" type="text" placeholder="Text input">
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
        <div>
          <a class="button is-primary query" @click="queryHandle">查询</a>
        </div>
      </div>
      
      <table class="table">
        <thead>
        <tr>
          <th>标题</th>
          <th>告警来源系统</th>
          <th>告警节点</th>
          <th>告警子节点</th>
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
          <td>{{ obj.Title }}</td>
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
            <a class="button is-small" @click="historyHandle" :data-id="obj.Id">查看历史</a>
            <a class="button is-small" @click="detailsHandle" :data-id="obj.Id">详情</a>
            <router-link class="button is-small" to="/Blacklist">黑名单</router-link>
            <a class="button is-small" :data-id="obj.Id">恢复</a>
          </td>
        </tr>
        </tbody>
      </table>
      <VuePage :data-num="pagedata.length" :each="eachPageSize" :visiblepage="visiblepage" @change-page="changePage"></VuePage>

      <div v-show="modalShow">
        <ModalHistory message="chengkangjian"></ModalHistory>
      </div>
      <div v-show="modalDetailsShow">
        <ModalDetails></ModalDetails>
      </div>
    </div>

</template>


<script>
import ModalHistory from './tpl/ModalHistory'
import ModalDetails from './tpl/ModalDetails'
import VuePage from './tpl/VuePage'
  export default {
  data () {
    return {
      name: 'alarm-node',
      
      cur: 0, 
      dataNum: 0, 
      eachPageSize: 3, 
      visiblepage: 5, 
      pagedata: [1, 2, 3, 4, 5, 6, 7, 8, 9], 
      curpage: 1,
        
      
      modalShow: false,
      modalDetailsShow: false,
      listData:[ 
      {
          Id: 9,
          Title: "title",
          AlarmId: "system_192.168.0.1_memory_used",
          SystemName: "system",
          Endpoint: "192.168.0.1",
          SubEndpoint: "192",
          Metric: "memory_used",
          Value: "0.92",
          BaseValue: "0.8",
          Level: 1,
          AlarmContent: "test",
          FirstReportTime: "2016-11-15 20:48:01",
          LastReportTime: "2016-11-24 10:42:04"
      },
      {
          Id: 8,
          Title: "title",
          AlarmId: "system_192.168.0.1_memory_used",
          SystemName: "system",
          Endpoint: "192.168.0.1",
          SubEndpoint: "192",
          Metric: "memory_used",
          Value: "0.92",
          BaseValue: "0.8",
          Level: 1,
          AlarmContent: "test",
          FirstReportTime: "2016-11-15 20:48:01",
          LastReportTime: "2016-11-24 10:42:04"
      },
      {
          Id: 7,
          Title: "title",
          AlarmId: "system_192.168.0.1_memory_used",
          SystemName: "system",
          Endpoint: "192.168.0.1",
          SubEndpoint: "192",
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
  computed: {
    modalShow () {
      return this.$store.state.modalShow
    },
    modalDetailsShow () {
      return this.$store.state.modalDetailsShow
    }
  },
  methods: {
    queryHandle () {
      alert('query function!')
    },
    historyHandle (e) {     
      console.log(e.target.dataset.id)
      this.$store.dispatch('MODAL_CHANGE_AC')
    },
    detailsHandle () {
      this.$store.dispatch('DETAILS_CHANGE_AC')
    },
    changePage (cur) {
        this.curpage = cur
        alert(cur)
    }
   
  },
  components:{
    ModalHistory,
    ModalDetails,     
    VuePage
   }
}
</script>

<style lang="scss">

  #alarm-node{
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

