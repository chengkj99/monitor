<!--
用户(组)管理

1报警信息展示
2监控项管理
3告警来源系统管理

黑名单管理
升级规则
用户监控项关系管理
值班管理
-->

<template>
    <div id="nav-node">
      <aside class="menu">
        <!-- <p class="menu-label"></p> -->
        <ul class="menu-list">
          <li> 
            <router-link to="/UserGroup">用户组管理</router-link>
          </li> 
          <li>
            <router-link to="/UserMonitorRelation">用户监控项关系管理</router-link>
          </li>
          <li>     
            <router-link to="/UserAttendance">值班管理 </router-link>
          </li>
          <li>
            <router-link to="/test">黑名单管理</router-link>
          </li>
          
          <li>       
            <router-link to="/Alarm">报警信息管理</router-link>
          </li>
          <li>
            <router-link to="/AlarmSource">告警来源系统管理</router-link>
          </li>
          <li>
            <router-link to="/MonitorItem">监控项管理</router-link>
          </li>
          <li>
            <router-link to="/test">升级规则管理</router-link>
          </li>
          
        </ul>    
      </aside>
    </div>
</template>

<style lang="scss">
  
  #nav-node {
    width: 200px;
    position: relative;
    display: block;
    padding: 50px 0px 50px 20px;
  }
</style>