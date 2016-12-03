<template>
    <div id="modal-details" @click.self="modalChange" >
      <div class="container"  id="table-box" :style=" tableBoxStyle ">

        <h1 class="title">告警详情</h1>

        <template v-for=" obj in details">
          <div>
            <label class="label">标题:</label>
            <p class="control">
              <input class="input" disabled="disabled" type="text" v-model="obj.Title">
            </p>
          </div>
          
          <div>
            <label class="label">告警来源系统:</label>
            <p class="control">
              <input class="input" disabled="disabled" type="text" v-model="obj.SystemName" placeholder="Text input">
            </p>
          </div>
          <div>
            <label class="label">监控节点:</label>
            <p class="control">
              <input class="input" disabled="disabled" type="text" v-model="obj.Endpoint" placeholder="Text input">
            </p>
          </div>
          <div>
            <label class="label">监控子节点:</label>
            <p class="control">
              <input class="input" disabled="disabled" type="text" v-model="obj.SubEndpoint" placeholder="Text input">
            </p>
          </div>
          <div>
            <label class="label">监控项:</label>
            <p class="control">
              <input class="input" disabled="disabled" type="text" v-model="obj.Metric" placeholder="Text input">
            </p>
          </div>
          <div>
            <label class="label">值:</label>
            <p class="control">
              <input class="input" disabled="disabled" type="text" v-model="obj.Value" placeholder="Text input">
            </p>
          </div>
          <div>
            <label class="label">阀值:</label>
            <p class="control">
              <input class="input" disabled="disabled" type="text" v-model="obj.Level" placeholder="Text input">
            </p>
          </div>
          <div>
            <label class="label">告警等级:</label>
            <p class="control">
              <input class="input" disabled="disabled" type="text" v-model="obj.ReportTime" placeholder="Text input">
            </p>
          </div>
          <div>
            <label class="label">告警时间:</label>
            <p class="control">
              <input class="input" disabled="disabled" type="text" v-model="obj.AlarmContent" placeholder="Text input">
            </p>
          </div>
          <div>
            <label class="label">告警内容:</label>
            <p class="control">
              <textarea class="textarea" disabled="disabled" v-model="obj.Endpoint" placeholder="textarea"></textarea>
            </p>
          </div>
        </template>
        


      </div>
    </div>
</template>


<script>
    export default{
      props:['message'],
      data(){
        return{
          tableBoxStyle:{
           marginTop:(window.innerHeight-770)/2+"px",
           height:"770px"
          },
          details:[
            {
              id: 1,
              Title: "123",
              SystemName: "123",
              Endpoint: "123",
              SubEndpoint: "000",
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
          this.$store.dispatch('DETAILS_CHANGE_AC')         
        }
      }
    }
</script>

<style lang="scss">
  @import "../../assets/css/style";
  

  #modal-details{
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
      background-color: black;
      -webkit-border-radius: 7px;
      -moz-border-radius: 7px;
      border-radius: 7px;
      padding: 10px 0px 30px 0px;

      h1{
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
        

        
        >label{
          color:white;
            
        }
        
        p{
          >input{
            
          }
          
          >textarea{
            
          }
        }
      }
      
      
    }

  }
</style>

