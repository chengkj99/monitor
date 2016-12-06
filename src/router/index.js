/**
 * Created by chengkj on 16/11/26.
 */

import Vue from 'vue'
import Router from 'vue-router'

import Hello from '../components/Hello'
import test from '../components/test'

// import App from '../App'
import Alarm from '../components/Alarm'
import AlarmSource from '../components/AlarmSource'
import MonitorItem from '../components/MonitorItem'
import UserAttendance from '../components/UserAttendance'
import User from '../components/User'
import UserGroup from '../components/UserGroup'
import UserMonitorRelation from '../components/UserMonitorRelation'
import Blacklist from '../components/Blacklist'
import UpgradeRule from '../components/UpgradeRule'
import UserRelation from '../components/UserRelation'
import MultiSelectTest from '../components/tpl/MultiSelectTest'
import Test from '../components/test'

Vue.use(Router)

const routes = [

  {
    path: '/',
    component: Alarm
  },
  {
    path: '/Alarm',
    name: 'Alarm',
    component: Alarm
  },
  {
    path: '/AlarmSource',
    name: 'AlarmSource',
    component: AlarmSource
  },
  {
    path: '/MonitorItem',
    name: 'MonitorItem',
    component: MonitorItem
  },
  {
    path: '/User',
    name: 'User',
    component: User
  },
  {
    path: '/UserAttendance',
    name: 'UserAttendance',
    component: UserAttendance
  },
  {
    path: '/UserGroup',
    name: 'UserGroup',
    component: UserGroup
  },
  {
    path: '/UserMonitorRelation',
    name: 'UserMonitorRelation',
    component: UserMonitorRelation
  },
  {
    path: '/hello',
    component: Hello
  },  
  {
    path: '/test',
    component: Test
  },

  {
    path: '/selectTest',
    name: 'selectTest',
    component: MultiSelectTest
  },
  {
    path: '/Blacklist',
    name: 'Blacklist',
    component: Blacklist
  },
  {
    path: '/UpgradeRule',
    name: 'UpgradeRule',
    component: UpgradeRule
  },  
  {
    path: '/UserRelation',
    name: 'UserRelation',
    component: UserRelation
  }
]

const router = new Router({
  routes
})
export default router
