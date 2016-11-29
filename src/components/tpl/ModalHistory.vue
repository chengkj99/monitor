<template>
    <div id="modal-history">
      <div class="container" id="table-box" :style=" tableBoxStyle "> 
        <a @click="modalChange" href="javascript:void(0)">关闭</a>
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
            <th>告警时间</th>
            <th>告警内容</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="obj in details">
            <td id="obj.id">{{ obj.Title }}</td>
            <td>{{ obj.SystemName }}</td>
            <td>{{ obj.Endpoint }}</td>
            <td>{{ obj.SubEndpoint }}</td>
            <td>{{ obj.Metric }}</td>
            <td>{{ obj.Value }}</td>
            <td>{{ obj.BaseValue }}</td>
            <td>{{ obj.Level }}</td>
            <td>{{ obj.ReportTime }}</td>
            <td>{{ obj.AlarmContent }}</td>
          </tr>
          </tbody>
        </table>


      </div>
        <!--<div>this is {{getMessage()}} body</div>-->
    </div>
</template>


<script>
//import { modalChange } from '../../store/action'

    export default{
       props:['message'],

       data(){
         return{
         tableBoxStyle:{
          marginTop:(window.innerHeight-window.innerHeight*0.95)/2+"px"
         },
          details:[
          {
            id: 1,
            Title: "123",
            SystemName: "123",
            Endpoint: "123",
            SubEndpoint: "",
            Metric: "123",
            Value: "123",
            BaseValue: "123",
            EventType: 1,
            Level: 1,
            ReportTime: "2016-11-03 17:17:29",
            AlarmContent: "2"
          }
          ]
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
         this.$store.dispatch('MODAL_CHANGE_AC')
         }
       },
       ready () {
       alert('1000')
        console.log(document.getElementById('table-box'),'box');
        
       }
    }
</script>

<style lang="scss">
  @import "../../assets/css/style";
  

  #modal-history{
    position: fixed;
    background-color: rgba($background , 0.3);
    width: 100%;
    height: 100%;
    z-index: 5;
    color: red;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    .container{
      width: 80%;
      position: relative;
      display: block;
      height: 95%;
      overflow: auto;
      margin: auto;

      table{
        background-color: black;
        color: white;
        font-weight: bold;
        border-radius: 10px;
        box-shadow: 0px 0px 20px black;
        margin: 0px;

        tr{
          &:hover{
            /*background: none;*/
            color:black;
            cursor: pointer;
          }
        }
        th{

          &:hover{
            background: none;
            /*color:black;*/

          }
        }
        td{

          &:hover{
            background: none;
            color:black;
          }
        }
      }

    }

  }
</style>

