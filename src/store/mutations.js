/**
 * Created by chengkj on 16/12/2.
 */


const mutations = {

  //查看历史组件显示隐藏
  MODAL_CHANGE (state) {
    if(state.modalShow==false){
      state.modalShow=true;
    }else{
      state.modalShow=false;
    }
  },
  //详情组件显示隐藏
  DETAILS_CHANGE (state) {
    if(state.modalDetailsShow==false){
      state.modalDetailsShow=true;
    }else{
      state.modalDetailsShow=false;
    }
  },
  //重命名组件显示隐藏
  RENAME_CHANGE (state) {
    if(state.modalRenameShow==false){
      state.modalRenameShow=true;
    }else{
      state.modalRenameShow=false;
    }
  },  
  //重命名组件显示隐藏
  USER_UPDATE_CHANGE (state) {
    if(state.modalUserUpdateShow==false){
      state.modalUserUpdateShow=true;
    }else{
      state.modalUserUpdateShow=false;
    }
  },  
  //添加用户组用户关系组件显示隐藏
  ADD_USER_RELATE_CHANGE (state) {
    if(state.modalAddUserRelateShow==false){
      state.modalAddUserRelateShow=true;
    }else{
      state.modalAddUserRelateShow=false;
    }
  },
  
  
  //添加黑名单
  ADD_BACK_LIST (state,payload) {
    state.BackListData.push(payload.listDataAdded)
  },
  //删除黑名单
  DEL_BACK_LIST (state,payload){
    state.BackListData=payload.BackListData
  },
  
  //获取黑名单
  GET_BACK_LIST (state,payload){
    state.BackListData=payload.BackListData
  }, 
  
  
  //获取升级规则
  GET_RULE_LIST (state,payload){
    state.RuleListData=payload.RuleListData
  },
  //添加黑名单
  ADD_RULE_LIST (state,payload) {
    state.RuleListData.push(payload.RuleListDataAdded)
  },
  //删除黑名单
  DEL_RULE_LIST (state,payload){
    state.RuleListData=payload.RuleListData
  },

  
  //获取监控项数据
  GET_MONITOR_ITEM (state,payload) {
    state.MonitorItemData=payload.MonitorItemData
  },
  //添加监控项
  ADD_MONITOR_ITEM (state,payload) {
    state.MonitorItemData=payload.MonitorItemData
  },  
  //修改监控项名称
  UPDATE_MONITOR_ITEM (state,payload) {
    state.MonitorItemData=payload.MonitorItemData
  },
  //删除监控项
  DEL_MONITOR_ITEM (state,payload) {
    state.MonitorItemData=payload.MonitorItemData
  },
  //确认
  CONFIRM_MONITOR_ITEM (state,payload) {
    state.MonitorItemData=payload.MonitorItemData
  },

//AlarmSource.vue
  //获取来源系统数据AlarmSourceData: Array[3]
  GET_ALARM_SOURCE (state,payload) {
    state.AlarmSourceData=payload.AlarmSourceData
  },
  //添加来源系统
  ADD_ALARM_SOURCE (state,payload) {
    state.AlarmSourceData.push(payload.AlarmSourceDataAdd)
  },
  //修改来源系统名称
  UPDATE_ALARM_SOURCE (state,payload) {
    state.AlarmSourceData=payload.AlarmSourceData
  },
  //删除来源系统
  DEL_ALARM_SOURCE (state,payload) {
    state.AlarmSourceData=payload.AlarmSourceData
  },
  //确认来源系统
  CONFIRM_ALARM_SOURCE (state,payload) {
    state.AlarmSourceData=payload.AlarmSourceData
  },


  //获取来源系统数据AlarmSourceData: Array[3]
  GET_ALARM (state,payload) {
    state.AlarmData=payload.AlarmData
  },
  QUERY_ALARM (state,payload) {
    state.AlarmData=payload.AlarmData
  },
  //来源系统详情数据
  DETAILS_ALARM (state,payload) {
    state.ModalDetailsData=payload.ModalDetailsData
  },  
  //来源系统历史数据
  HISTORY_ALARM (state,payload) {
    state.ModalDetailsData=payload.ModalDetailsData
  },
  //告警恢复
  RESTORE_ALARM (state,payload) {
    state.AlarmData=payload.AlarmData
  },

  
  //添加用户
  ADD_USER (state,payload) {
    state.UserData.push(payload.UserDataAdd)
  },
  //修改用户
  UPDATE_USER (state,payload) {
    state.UserData=payload.UserData
  },
  //删除用户
  DEL_USER (state,payload) {
    state.UserData=payload.UserData
  },
  
  
  //添加用户组
  ADD_USER_GROUP (state,payload) {
    state.UserGroupData.push(payload.UserGroupDataAdd)
  }, 
  //修改用户组
  UPDATE_USER_GROUP (state,payload) {
    state.UserGroupData=payload.UserGroupData
  }, 
  //删除用户组
  DEL_USER_GROUP (state,payload) {
    state.UserGroupData=payload.UserGroupData
  },



  //获取来源系统名称
  GET_SYSTEM_NAME (state,payload) {
    state.SystemNameData=payload.SystemNameData
  }




}
export default mutations