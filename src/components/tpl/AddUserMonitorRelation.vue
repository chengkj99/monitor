<!-- 添加用户组监控项关系 组件 -->


<template>
  <div id="modal-add-users" @click.self="modalChange" >
    <div class="container"  id="table-box" :style=" tableBoxStyle " >
      <h3 class="title is-4">添加用户组关注的监控项</h3>

        <div>
          <div>
            <label class="label">用户组名称＊</label>
            <p class="control">
            <span class="select" >
              <select v-model="GroupMonitorName" @blur="groupSelectBlurHandle">
                <option v-for="val in UserMonitorRelationData"  :mark="val.GroupId">
                  {{val.GroupName}}
                </option>
              </select>
            </span>
            </p>
          </div>
          <div>
            <label class="label">来源系统名称＊</label>
            <p class="control">
            <span class="select" >
              <select v-model="SystemName">
                <option v-for="val in SystemNameData">
                  {{val.SystemName}}
                </option>
              </select>
            </span>
            </p>
          </div>          
          <div>
            <label class="label">监控项名称＊</label>
            <p class="control">
            <span class="select" >
              <select v-model="MonitorName">
                <option v-for="val in SystemNameData" :data-groupId="val.Id" :mark="val.Id">
                  {{val.SystemName}}
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
      data(){
        return{
        
          tableBoxStyle:{
           marginTop:(window.innerHeight-375)/2+"px",
           height:"375px"
          },          
          tableBoxStyleTwo:{
           marginTop:(window.innerHeight-385)/2+"px",
           height:"385px"
          },
          UserRelationData:this.$store.state.UserRelationData,
          
          UserMonitorRelationData:'',
          SystemNameData:'',
          
          
          SystemName:'',
          GroupMonitorName:'',
          MonitorName:'',
          
          GroupId:'',
          Id:'',
        }
      },
      watch:{

      },
      computed:{
        UserMonitorRelationData () {
          return this.$store.state.UserMonitorRelationData;
        },      
        SystemNameData () {
          return this.$store.state.SystemNameData;
        }
      },
      methods:{
        modalChange () {
          this.$store.dispatch('ADD_MONITOR_RELATE_CHANGE_AC')
        },
        saveHandle () {
          
          this.$store.dispatch({
            type:'ADD_USER_MONITOR_RELATION_AC',
            amount:{
              GroupId:this.GroupId,
              SystemName:this.SystemName,
              metric:this.MonitorName
            }
          })
        },
        resetHandle () {
          this.Name='';
          this.GroupMonitorName='';
        },

        groupSelectBlurHandle (e) {
          let _this=e.target
          let targetIndex=_this.selectedIndex;
          let groupId=_this.options[targetIndex].getAttribute('mark')
           this.GroupId=groupId
           console.log(this.GroupId)
        }
      }
    }
</script>

<style lang="scss">
  @import "../../assets/css/style";


  #modal-add-users{
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
      width: 385px;
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

    #multi-select-box{
      span{
        display: inline-block;
      }

      .multiselect__content{

        span{
          display: block;
        }
        position:fixed;
        width: 307px;
      }
      .multiselect__tags{

        height: 100px;
      }
    }

  }
</style>

