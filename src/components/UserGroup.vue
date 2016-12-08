<!-- 用户组管理 -->


<!-- 黑名单组件 -->

<template>
  <div id="rule-node">
    <UserAndUserGroup componentName="用户组" :listData="listData"></UserAndUserGroup>

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
      listData(){
        return this.$store.state.UserGroupData
      }
    },
    mounted () { 
      console.log('---------------')
      this.$store.dispatch('GET_USER_GROUP_AC');
    },
    methods:{
    
    }
  }
</script>

<style lang="scss">

  @import "../assets/css/page";

  #rule-node{


  }


</style>
