<template>
    <div id="modal-history" @click.self="modalChange" >
      <div class="container"  id="table-box" :style=" tableBoxStyle "> 
        
        <table class="table">
          <thead>
          <tr>
            <th>标题</th>
            <th>告警来源系统</th>
            <th>监控节点</th>
            <th>监控子节点</th>
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
            <td>{{ obj.Title }}</td>
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
    </div>
</template>


<script>
    export default{
      
       data(){
         return{
         tableBoxStyle:{
          marginTop:(window.innerHeight-800)/2+"px"
         },
         details: []
         
         }
       },
       computed: {
         details(){
           return this.$store.state.ModalHistoryData
         }
       },
       mounted(){
          console.log("history log:",this.$store.state.ModalHistoryData)
       },
       methods:{
         modalChange () {
           this.$store.dispatch('MODAL_CHANGE_AC')
         }
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
      height: 800px;
      overflow: auto;
      margin: auto;
      border-radius: 10px;

      table{
        background-color: black;
        color: white;
        font-weight: bold;
        box-shadow: 0px 0px 20px black;
        margin: 0px;

        tr{
          &:hover{
            color:black;
            cursor: pointer;
          }
        }
        th{

          &:hover{
            background: none;
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

