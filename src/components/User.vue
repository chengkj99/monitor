<!-- 用户组管理 -->

<!-- 黑名单组件 -->

<template>
  <div id="rule-node">
    <UserAndUserGroup componentName="用户" :listData="listData"></UserAndUserGroup>

  </div>


</template>


<script>
import UserAndUserGroup from './tpl/UserAndUserGroup'

  export default {
  
    components:{
      UserAndUserGroup
    },
  
    data () {
      return {
        listData:[]
      }
    },
    computed:{
      listData () {
        return this.$store.state.UserData
      }
    },
    methods:{
    
    },
    mounted () {
    }
  }
</script>

<style lang="scss">

  @import "../assets/css/page";

  #rule-node{


  }


</style>
