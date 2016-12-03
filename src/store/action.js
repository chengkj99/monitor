/**
 * Created by chengkj on 16/12/2.
 */
import Vue from 'vue'
import resource from 'vue-resource'
Vue.use(resource)
import state  from './state'




const actions = {
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
  
  /*---------------------------------------------黑名单--------------------*/
  //添加黑名单
  ADD_BACK_LIST_AC({ commit },payload) {
    
    //接口操作    console.log(Vue.http)
    commit({
      type:'ADD_BACK_LIST',
      listDataAdded:payload.amount
    })
    return Promise.resolve()
  },
  //删除黑名单
  DEL_BACK_LIST_AC({ commit },payload) {

    //调用删除接口    console.log(Vue.http)
    //payload.amount 是删除的ID
    // 调用查询接口 查出新数据 :listData
    
    commit({
      type:'DEL_BACK_LIST',
      BackListData:'' //BackListData
    })
    return Promise.resolve()
  },
  
  //获取黑名单
  GET_BACK_LIST_AC ({ commit }) {
    // 调用查询接口 查出新数据 :BackListData
    
    commit({
      type:'GET_BACK_LIST',
      BackListData:state.BackListData //BackListData
    })
  },


  /*---------------------------------------------升级规则--------------------*/

  //获取升级规则数据
  GET_RULE_LIST_AC ({ commit }) {
    // 调用查询接口 查出新数据 :RuleListData
    commit({
      type:'GET_RULE_LIST',
      RuleListData:state.RuleListData //RuleListData
    })
  },
  //添加升级规则数据
  ADD_BACK_LIST_AC ({ commit },payload) {
    //接口操作    console.log(Vue.http)
    commit({
      type:'ADD_RULE_LIST',
      RuleListDataAdded:payload.amount
    })
    return Promise.resolve()
  },
  //删除升级规则数据
  DEL_BACK_LIST_AC ({ commit }) {

    //调用删除接口    console.log(Vue.http)
    //payload.amount 是删除的ID
    // 调用查询接口 查出新数据 :listData

    commit({
      type:'DEL_RULE_LIST',
      RuleListData:'' //BackListData
    })
    return Promise.resolve()
  },

  /*---------------------------------------------监控项管理--------------------*/

  // 获取监控项数据
  GET_MONITOR_ITEM_AC ({ commit }) {
    
    // 调用查询接口 查数据 :MonitorItemData
    
    commit({
      type:'GET_MONITOR_ITEM',
      MonitorItemData:state.MonitorItemData
    })
    
  },

  //添加监控项数据
  ADD_MONITOR_ITEM_AC ({ commit },payload) {
    //接口添加操作 payload.amount    console.log(Vue.http)
    
    //查询操作更新数据 MonitorItemData
    
    commit({
      type:'ADD_MONITOR_ITEM',
      MonitorItemData:state.MonitorItemData 
    })
    return Promise.resolve()
  },

  //监控项名称修改
  UPDATE_MONITOR_ITEM_AC ({ commit },payload) {
    //接口修改操作 payload.amount    console.log(Vue.http)

    //查询操作更新数据 MonitorItemData

    commit({
      type:'UPDATE_MONITOR_ITEM',
      RuleListDataAdded:state.MonitorItemData
    })
    return Promise.resolve()
  },
  
  //监控项删除
  DEL_MONITOR_ITEM_AC ({ commit },payload) {
    //接口删除操作 payload.amount    console.log(Vue.http)

    //查询操作更新数据 MonitorItemData

    commit({
      type:'DEL_MONITOR_ITEM',
      RuleListDataAdded:state.MonitorItemData
    })
    return Promise.resolve()
  },
  CONFIRM_MONITOR_ITEM_AC ({ commit },payload) {
    //接口监控项确认操作 payload.amount    console.log(Vue.http)
    commit({
      type:'DEL_MONITOR_ITEM',
      RuleListDataAdded:state.MonitorItemData
    })
    return Promise.resolve()
  },

  /*---------------------------------------------来源系统管理--------------------*/

  // 获取监控项数据
  GET_ALARM_SOURCE_AC ({ commit }) {

    // 调用查询接口 查数据 :MonitorItemData

    commit({
      type:'GET_ALARM_SOURCE',
      AlarmSourceData:state.AlarmSourceData
    })

  },
  //添加来源系统数据
  ADD_ALARM_SOURCE_AC ({ commit },payload) {
    //接口添加操作 payload.amount    console.log(Vue.http)
    
    //查询操作更新数据 MonitorItemData
    console.log('payload.amount :'+payload.amount )
    commit({
      type:'ADD_ALARM_SOURCE',
      AlarmSourceDataAdd:payload.amount 
    })
    return Promise.resolve()
  },

  //来源系统名称修改
  UPDATE_ALARM_SOURCE_AC ({ commit },payload) {
    //接口修改操作 payload.amount    console.log(Vue.http)

    //查询操作更新数据 MonitorItemData

    commit({
      type:'UPDATE_ALARM_SOURCE',
      RuleListDataAdded:state.MonitorItemData
    })
    return Promise.resolve()
  },
  
  //来源系统删除
  DEL_ALARM_SOURCE_AC ({ commit },payload) {
    //接口删除操作 payload.amount    console.log(Vue.http)

    //查询操作更新数据 MonitorItemData

    commit({
      type:'DEL_ALARM_SOURCE',
      RuleListDataAdded:state.MonitorItemData
    })
    return Promise.resolve()
  },
  CONFIRM_ALARM_SOURCE_AC ({ commit },payload) {
    //接口来源系统确认操作 payload.amount    console.log(Vue.http)
    commit({
      type:'DEL_ALARM_SOURCE',
      RuleListDataAdded:state.MonitorItemData
    })
    return Promise.resolve()
  },

  /*---------------------------------------------报警信息管理--------------------*/
  // 获取报警信息数据
  GET_ALARM_AC ({ commit }) {

    // 调用查询接口 查数据 :AlarmData

    commit({
      type:'GET_ALARM',
      AlarmData:state.AlarmData
    })

  },
  // 按条件查询数据
  QUERY_ALARM_AC ({ commit },payload) {

    // 调用查询接口 查数据 payload.amount :AlarmData
    console.log(payload.amount)

    commit({
      type:'QUERY_ALARM',
      AlarmData:state.AlarmData
    })

  },
  


}
export default actions