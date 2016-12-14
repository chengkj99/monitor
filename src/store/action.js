/**
 * Created by chengkj on 16/12/2.
 */
import Vue from 'vue'
import resource from 'vue-resource'
Vue.use(resource)
import state  from './state'
import store  from './index'

//Vue.http.options.root = 'http://api.hhb.com';




const actions = {
  /**--------------隐藏panel---------------- */
  MODAL_CHANGE_AC ({ commit }) {
    commit('MODAL_CHANGE')
    return Promise.resolve()
  },
  DETAILS_CHANGE_AC({ commit }) {
    commit('DETAILS_CHANGE')
    return Promise.resolve()
  },
  RENAME_CHANGE_AC({ commit }) {
    commit('RENAME_CHANGE')
    return Promise.resolve()
  }, 
  USER_UPDATE_CHANGE_AC({ commit }) {
     commit('USER_UPDATE_CHANGE')
     return Promise.resolve()    
  },  
  ADD_USER_RELATE_CHANGE_AC({ commit }) {
    commit('ADD_USER_RELATE_CHANGE')
    return Promise.resolve()
  },  
  ADD_MONITOR_RELATE_CHANGE_AC({ commit }) {
    commit('ADD_MONITOR_RELATE_CHANGE')
    return Promise.resolve()
  },  
  ADD_USER_ATTENDANCE_CHANGE_AC({ commit }) {
    commit('ADD_USER_ATTENDANCE_CHANGE')
    return Promise.resolve()
  },  
  USER_ATTENDANCE_UPDATE_CHANGE_AC({ commit }) {
    commit('USER_ATTENDANCE_UPDATE_CHANGE')
    return Promise.resolve()
  },
  //显示隐藏来源系统面板
  ADD_SYSTEM_SHOW_AC(){
    if(state.modalAddMonitorItemShow==false){
          state.modalAddMonitorItemShow=true
    }else{
          state.modalAddMonitorItemShow=false
    }
  },
  //显示隐藏rule面板
  ADD_RULE_SHOW_AC(){
    if(!state.modalAddShow){
      state.modalAddShow=true
    }else{
      state.modalAddShow= false
    }
  },
  /*---------------------------------------------黑名单--------------------*/
  //添加黑名单
  ADD_BACK_LIST_AC({ commit },payload) {
    
    console.log('add blacklist:',payload.amount)
    //接口操作    console.log(Vue.http)
    Vue.http.post('/api/v1/blacklist/create',payload.amount)
    .then(
     (res)=>{      
        store.dispatch('GET_BACK_LIST_AC')
      }
    ) 
      //  commit({
      //     type:'ADD_BACK_LIST',
      //     listDataAdded:payload.amount
      //   })
    return Promise.resolve()
  },
  //删除黑名单
  DEL_BACK_LIST_AC({ commit },payload) {

    //调用删除接口    console.log(Vue.http)
    //payload.amount 是删除的ID
    // 调用查询接口 查出新数据 :listData
    
    // commit({
    //   type:'DEL_BACK_LIST',
    //   BackListData:'' //BackListData
    // })
    // return Promise.resolve()
    Vue.http.post("/api/v1/blacklist/del",{},{params:payload.amount})
    .then(
      (res)=>{
        store.dispatch('GET_BACK_LIST_AC')
      }
    )
  },
  
  //获取黑名单
  GET_BACK_LIST_AC ({ commit }) {
    // 调用查询接口 查出新数据 :BackListData
    Vue.http.get("/api/v1/blacklist/all").then(
      (res)=>{
         commit({
          type:'GET_BACK_LIST',
          BackListData:res.data//BackListData
        })
      }
    )
   
  },


  /*---------------------------------------------升级规则--------------------*/

  //获取升级规则数据
  GET_RULE_LIST_AC ({ commit }) {
    // 调用查询接口 查出新数据 :RuleListData
    Vue.http.get('/api/v1/rule/all').then(
      (res)=>{
          commit({
            type:'GET_RULE_LIST',
            RuleListData:res.data //RuleListData
           })
      }
    )
    
  },
  //添加升级规则数据
  ADD_RULE_LIST_AC ({ commit },payload) {
    //接口操作    console.log(Vue.http)
    console.log('add rule',payload.amount)
    Vue.http.post('/api/v1/rule/create',payload.amount).then(
      (res)=>{
        store.dispatch('GET_RULE_LIST_AC')
        store.dispatch('ADD_RULE_SHOW_AC')
      }
    )
    // commit({
    //   type:'ADD_RULE_LIST',
    //   RuleListDataAdded:payload.amount
    // })
    // return Promise.resolve()
  },
  //删除升级规则数据
  DEL_RULE_LIST_AC ({ commit },payload) {

    //调用删除接口    console.log(Vue.http)
    //payload.amount 是删除的ID
    // 调用查询接口 查出新数据 :listData

    console.log(payload.amount)
    Vue.http.post('/api/v1/rule/del',{},{params:payload.amount}).then(
      (res)=>{
        store.dispatch('GET_RULE_LIST_AC')
      }
    )
    // commit({
    //   type:'DEL_RULE_LIST',
    //   RuleListData:'' //BackListData
    // })
    // return Promise.resolve()
  },

  /*---------------------------------------------监控项管理--------------------*/

  // 获取监控项数据
  GET_MONITOR_ITEM_AC ({ commit }) {
    
    // 调用查询接口 查数据 :MonitorItemData
    Vue.http.get("/api/v1/metric/all").then(
      (res)=>{
         commit({
            type:'GET_MONITOR_ITEM',
            MonitorItemData:res.data
          })
      }
    )
  },

//监控项是否存在
  EXIST_MONITOR_ITEM_AC({commit},payload){
    console.log('payload.amount::'+payload.amount)
    return new Promise(
      (resolve,reject)=>{
         Vue.http.get("/api/v1/metric/exist",{params:payload.amount}).then(
           (res)=>{
             resolve(res)
           },
           (res)=>{
             reject(res)
           }
         )
      }
    )
  },
  RENAME_MONITOR_ITEM_AC({commit},payload){
    console.log('rename metric name',payload.amount)
    Vue.http.post('/api/v1/metric/rename',{},{params:payload.amount}).then(
      (res)=>{
        store.dispatch('GET_MONITOR_ITEM_AC')
        store.dispatch('RENAME_CHANGE_AC')
      }  
    )
  },

  //添加监控项数据
  ADD_MONITOR_ITEM_AC ({ commit },payload) {
    //接口添加操作 payload.amount    console.log(Vue.http)
    
    //查询操作更新数据 MonitorItemData
    console.log('add metric',payload.amount)
    Vue.http.post('/api/v1/metric/create',payload.amount).then(
      (res)=>{
        store.dispatch('GET_MONITOR_ITEM_AC')
        store.dispatch('ADD_SYSTEM_SHOW_AC')
      }
    )
    // commit({
    //   type:'ADD_MONITOR_ITEM',
    //   MonitorItemData:state.MonitorItemData 
    // })
    // return Promise.resolve()
  },

  //监控项名称修改
  UPDATE_MONITOR_ITEM_AC ({ commit },payload) {
    //接口修改操作 payload.amount    console.log(Vue.http)

    //查询操作更新数据 MonitorItemData
    Vue.http.post('/api/v1/metric/update').then(
      (res)=>{
         commit({
           type:'UPDATE_MONITOR_ITEM',
           RuleListDataAdded:state.MonitorItemData
          })
      }
    )
   
    return Promise.resolve()
  },
  
  //监控项删除
  DEL_MONITOR_ITEM_AC ({ commit },payload) {
    //接口删除操作 payload.amount    console.log(Vue.http)
    console.log('delete metric -------',payload.amount)
    //查询操作更新数据 MonitorItemData
    Vue.http.post('/api/v1/metric/del',{},{params:payload.amount})
      .then(
        (res)=>{
          store.dispatch('GET_MONITOR_ITEM_AC')
        }
      )
    // commit({
    //   type:'DEL_MONITOR_ITEM',
    //   RuleListDataAdded:state.MonitorItemData
    // })
    // return Promise.resolve()
  },
  CONFIRM_MONITOR_ITEM_AC ({ commit },payload) {
    //接口监控项确认操作 payload.amount    console.log(Vue.http)
    Vue.http.post('/api/v1/metric/confirm',{},{params:payload.amount})
    .then(
      (res)=>{
        store.dispatch('GET_MONITOR_ITEM_AC')
      }
    )
    // commit({
    //   type:'DEL_MONITOR_ITEM',
    //   RuleListDataAdded:state.MonitorItemData
    // })
    // return Promise.resolve()
  },

  /*---------------------------------------------来源系统管理--------------------*/

  // 获取监控项数据
  GET_ALARM_SOURCE_AC ({ commit }) {

    // 调用查询接口 查数据 :MonitorItemData
    Vue.http.get('/api/v1/system/all').then(
      (res)=>{
        commit({
        type:'GET_ALARM_SOURCE',
        AlarmSourceData:res.data
       })
      }
    )
    
    return Promise.resolve()

  },
  //添加来源系统数据
  ADD_ALARM_SOURCE_AC ({ commit },payload) {
    //接口添加操作 payload.amount    console.log(Vue.http)
    
    //查询操作更新数据 MonitorItemData
    console.log('payload.amount :'+payload.amount )
    Vue.http.post('/api/v1/system/create',payload.amount)
    .then(
        (res)=>{
         store.dispatch('GET_ALARM_SOURCE_AC')
         store.dispatch('ADD_SYSTEM_SHOW_AC')
        }

    )
    
    // return Promise.resolve()
  },
  //判断是否存在system
  EXIST_ALARM_SOURCE_AC({commit},payload){
    console.log('payload.amount::'+payload.amount)
    return new Promise(
      (resolve,reject)=>{
         Vue.http.get("/api/v1/system/exist",{params:payload.amount}).then(
           (res)=>{
             console.log("rename res -------------",res)
             resolve(res)
           },
           (res)=>{
              console.log("rename res -------------",res)
             reject(res)
           }
         )
      }
    )
  },
  //来源系统名称修改
  RENAME_ALARM_SOURCE_AC ({ commit },payload) {
    //接口修改操作 payload.amount    console.log(Vue.http)

    //查询操作更新数据 MonitorItemData
    console.log('rename system:',payload.amount)
    Vue.http.post('/api/v1/system/rename',{},{params:payload.amount}).then(
      (res)=>{
        store.dispatch('GET_ALARM_SOURCE_AC')
        store.dispatch('RENAME_CHANGE_AC')
      }
    )
    // commit({
    //   type:'UPDATE_ALARM_SOURCE',
    //   RuleListDataAdded:state.MonitorItemData
    // })
    // return Promise.resolve()
  },
  
  //来源系统删除
  DEL_ALARM_SOURCE_AC ({ commit },payload) {
    //接口删除操作 payload.amount    console.log(Vue.http)
    console.log(payload.amount)
    Vue.http.post('/api/v1/system/del',{},{params:payload.amount})
    .then(
      (res)=>{
          store.dispatch('GET_ALARM_SOURCE_AC')
      }
    )
    //查询操作更新数据 MonitorItemData

    // commit({
    //   type:'DEL_ALARM_SOURCE',
    //   RuleListDataAdded:state.MonitorItemData
    // })
    // return Promise.resolve()
  },
  CONFIRM_ALARM_SOURCE_AC ({ commit },payload) {
    //接口来源系统确认操作 payload.amount    console.log(Vue.http)
    console.log(payload.amount)
    Vue.http.post('/api/v1/system/confirm',{},{params:payload.amount}).
    then(
      (res)=>{
          store.dispatch('GET_ALARM_SOURCE_AC')
      }
    )
    // commit({
    //   type:'DEL_ALARM_SOURCE',
    //   RuleListDataAdded:state.MonitorItemData
    // })
    // return Promise.resolve()
  },

  /*---------------------------------------------报警信息管理--------------------*/
  // 获取报警信息数据
  GET_ALARM_AC ({ commit }) {

    // 调用查询接口 查数据 :AlarmData
   return new Promise((resolve,reject)=>{
     Vue.http.get("/api/v1/alarm/search").then(
      (res) =>  {
      commit({
        type:'GET_ALARM',
        AlarmData:res.data
      })
      resolve(res)
      })
   }) 
  },
  // 按条件查询数据
  QUERY_ALARM_AC ({ commit },payload) {
    // 调用查询接口 查数据 payload.amount :AlarmData
    return new Promise((resolve,reject) =>{
      Vue.http.get("/api/v1/alarm/search",{params:payload.amount})
      .then( (res) =>{
            commit({
            type:'QUERY_ALARM',
            AlarmData:res.data
            })
    resolve(res)
    })
    })  
  },  
  // 查看来源系统详情数据
  DETAILS_ALARM_AC ({ commit },payload) {

    // 调用查询接口 查数据 payload.amount :ModalDetailsData
    console.log(payload.amount)
    Vue.http.get("/api/v1/alarm/detail?id="+payload.amount)
    .then(
       (res)=>{
          commit({
            type:'DETAILS_ALARM',
            ModalDetailsData:res.data
          })
       }
      )
    
    // return Promise.resolve()

  },

  // 查看来源系统历史数据
  HISTORY_ALARM_AC ({ commit },payload) {

    // 调用查询接口 查数据 payload.amount :ModalHistoryData
    console.log(payload.amount)
    Vue.http.get("/api/v1/alarm/history/search",{params:payload.amount})
    .then(
      (res) =>{
        commit({
         type:'HISTORY_ALARM',
         ModalHistoryData:res.data
        })
      }
    )
    
    // return Promise.resolve()

  },
  // 告警恢复
  RESTORE_ALARM_AC ({ commit },payload) {

    // 调用接口 恢复  payload.amount 
    // 调用查询接口 查数据  :AlarmData
     console.log(payload.amount)
    Vue.http.post('/api/v1/alarm/recover',{},{params:payload.amount}).then(
      (res)=>{
        
          store.dispatch('GET_ALARM_AC')
        
      }
    )
    commit({
      type:'RESTORE_ALARM',
      AlarmData:state.AlarmData
    })
    return Promise.resolve()

  },
  /*---------------------------------------------用户管理--------------------*/

  ADD_USER_AC ({ commit },payload) {

  // 调用添加用户接口 payload.amount  :UserDataAdd
    console.log(payload.amount)
    return new Promise((resolve, reject) => {
      Vue.http.post('/api//v1/user/create',payload.amount,{}).then( (res) => {
        commit({
          type:'ADD_USER',
          UserDataAdd:payload.amount
        })
        resolve(res)
      })
    })
  },
  UPDATE_USER_AC ({ commit },payload) {

    // 调用修改用户数据接口 payload.amount  
    //查询更新数据 :UserData
    console.log(payload.amount)
    return new Promise((resolve,reject)=>{
      Vue.http.post("/api/v1/user/update",payload.amount,{}).then(
        res => {
          console.log('update res',res)
        return res.data.code
        }
      ).then(
        (code) => {
          resolve(code)
          if(code==200){
            store.dispatch('GET_USER_NAME_AC')
          }
        }
      )
    })
    

  },  
  DEL_USER_AC ({ commit },payload) {

    //调用删除用户数据接口 payload.amount  /v1/user/del POST
    //查询更新数据 :UserData
    console.log(payload.amount)
    
    return new Promise( (resolve, reject) => {
      Vue.http.post('/api/v1/user/del',{},{
        params:payload.amount
      }).then(
        (res) => {
          resolve(res)
          if(res.data.code==200){
            store.dispatch('GET_USER_NAME_AC')
          }
        }
      )
    })
  },

  /*---------------------------------------------用户组管理--------------------*/
  ADD_USER_GROUP_AC ({ commit },payload) {

    // 调用添加用户接口 payload.amount  :UserGroupData
    // /v1/user/create POST

    console.log(payload.amount)
    return new Promise((resolve,reject)=>{
      Vue.http.post("/api/v1/group/create",payload.amount,{}).then(
        res => {
          console.log('add group',res)
        return res.data.code
        }
      ).then(
        (code) => {
          resolve(code)
          if(code==200){
            store.dispatch('GET_USER_GROUP_AC')
          }
        }
      )
    })
    

  },
  UPDATE_USER_GROUP_AC ({ commit },payload) {
    console.log("group update________",payload.amount)
   // return Promise.resolve()
   return new Promise((resolve,reject)=>{
      Vue.http.post("/api/v1/group/update",payload.amount,{}).then(
        res => {
        return res.data.code
        }
      ).then(
        (code) => {
          resolve(code)
          if(code==200){
            store.dispatch('GET_USER_GROUP_AC')
          }
        }
      )
    })

  },
  DEL_USER_GROUP_AC ({ commit },payload) {

    // 调用删除用户组数据接口 payload.amount  
    //查询更新数据 :UserGroupData
    console.log('delete group ----------------',payload.amount)

    return new Promise((resolve,reject)=>{
      Vue.http.post("/api/v1/group/del",{},{params:payload.amount}).then(
        res => {
        return res.data.code
        }
      ).then(
        (code) => {
          resolve(code)
          if(code==200){
            store.dispatch('GET_USER_GROUP_AC')
          }
        }
      )
    })

  },

   //查询组接口
   // /v1/user/all POST
   GET_USER_GROUP_AC ({ commit },payload) {
    
    return new Promise((resolve,reject) => {
      Vue.http.get('/api/v1/group/all').then( (res) => {
       console.log('user group all',res.data)
        commit({
          type:'GET_USER_GROUP',
          UserGroupData:res.data
        })
      }).then( 
        res => resolve(res)
      )     
    }) 

  },
  /*---------------------------------------------用户组用户关系管理--------------------*/
  
  ADD_USER_RELATION_AC ({ commit },payload) {

    // 调用添加用户组用户关系接口 payload.amount  :UserRelationDataAdd
    console.log(payload.amount)
    //return Promise.resolve()
    return new Promise(
      (resolve,reject)=>{
        console.log("batchadd usergroup:",payload.amount)
        Vue.http.post("/api/v1/usergroup/batchadd",payload.amount,{})
        .then((res)=>{
            resolve(res)
            if(res.data.code == 200){
              store.dispatch('GET_USER_RELATION_AC')
            }
        })
      }
    )
  },
  DEL_USER_RELATION_AC ({ commit },payload) {

    // 调用删除用户组用户关系数据接口 payload.amount  
    //查询更新数据 :UserRelationData
    console.log(payload.amount)
    return new Promise(
      (resolve,reject)=>{
        Vue.http.post("/api/v1/usergroup/del",payload.amount)
        .then((res)=>{
          resolve(res)
          if(res.data.code == 200){
            store.dispatch('GET_USER_RELATION_AC')
          }
        })
      }
    )

  }, 

  //获取所有用户和用户组的关系
  GET_USER_RELATION_AC ({ commit }) {

    //获取所有用户和小组关系
    return new Promise((resolve,reject)=>{
      Vue.http.get("/api/v1/usergroup/all").then(
        (res)=>{
          commit({
            type:'GET_USER_RELATION',
            UserRelationData:res.data
          })
        }
      )
    })
  },
  /*---------------------------------------------用户组监控项关系管理--------------------*/
 
  GET_USER_MONITOR_RELATION_AC ({ commit }) {
    // http://192.168.92.92:8080/v1/groupmetric/all
    // 调用添加用户组用户关系接口 payload.amount  :UserMonitorRelationData
    // console.log(Vue.http)
   Vue.http.get('/api/v1/groupmetric/all').then( (res) => {
      console.log('res',res.data)
      commit({
        type:'GET_USER_MONITOR_RELATION',
        UserMonitorRelationData:res.data
      })
    })
  },
  ADD_USER_MONITOR_RELATION_AC ({ commit },payload) {

    // 调用添加用户组监控项关系接口 payload.amount  :UserMonitorRelationDataAdd
    console.log(payload.amount)

    commit({
      type:'ADD_USER_MONITOR_RELATION',
      UserMonitorRelationDataAdd:payload.amount
    })
    return new Promise(
      (resolve,reject)=>{
        Vue.http.post("/api/v1/")
      }
    )
  },
  DEL_USER_MONITOR_RELATION_AC ({ commit },payload) {

    // 调用删除用户组监控项关系数据接口 payload.amount  
    //查询更新数据 :UserMonitorRelationData
    console.log(payload.amount)
    commit({
      type:'DEL_USER_MONITOR_RELATION',
      UserMonitorRelationData:state.UserMonitorRelationData
    })
    return Promise.resolve()

  },
  
  /*---------------------------------------------值班管理--------------------*/

  GET_USER_ATTENDANCE_AC ({ commit }) {
    // 调用添加用户组用户关系接口 payload.amount  :UserAttendanceData
    // console.log(Vue.http)
    Vue.http.get('/api/v1/schedule/current').then( (res) => {
      console.log('res',res.data)
      commit({
        type:'GET_USER_ATTENDANCE',
        UserAttendanceData:res.data
      })
    })
  },  
  UPDATE_USER_ATTENDANCE_AC ({ commit },payload) {
    // 调用修改接口 payload.amount  :UserAttendanceData
    // 调用获取数据接口 :UserAttendanceData
    console.log(payload.amount)
    
    Vue.http.post('/api/v1/schedule/update',payload.amount).then( (res) => {
       console.log('res',res.data)
        if(res.data.code =200){
           store.dispatch('GET_USER_ATTENDANCE_AC')
        }
      // commit({
      //   type:'UPDATE_USER_ATTENDANCE',
      //   UserAttendanceData:res.data
      // })
    })
  
  },
  ADD_USER_ATTENDANCE_AC({commit},payload){
    console.log('add schedule:',payload.amount)
    Vue.http.post('/api/v1/schedule/create',payload.amount).then(
      (res)=>{
        if(res.data.code =200){
           store.dispatch('GET_USER_ATTENDANCE_AC')
        }
      }
    )
  },
  
  
  /*---------------------------------------------公共组件所需数据获取--------------------*/

  // 获取来源系统名称
  GET_SYSTEM_NAME_AC ({ commit },payload) {

    // 调用查询接口 查数据  :SystemNameData

    // /v1/system/all
    Vue.http.get('/api/v1/system/all').then( (res) => {
      console.log('res',res.data)
      commit({
        type:'GET_SYSTEM_NAME',
        SystemNameData:res.data
      })
    })
    return Promise.resolve()

  },
  // 查询所有用户
  GET_USER_NAME_AC ({ commit },payload) {

    // 调用查询接口 查数据  :UserData
    // /v1/system/all
    return new Promise((resolve,reject) => {
      Vue.http.get('/api/v1/user/all').then( (res) => {
        commit({
          type:'GET_USER_NAME',
          UserData:res.data
        })
      }).then( 
        res => resolve(res)
      )
      
    })
  }



}
export default actions