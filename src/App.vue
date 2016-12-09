<template>
  <div id="app">
    <header-bar />
    <div class="content-node">
      <div class="nav-box"><nav-bar /></div>
      <div calss="content-box"><app-main /></div>
    </div>
    <!--<footer-bar />-->
    
    <!--<router-view name="modal"></router-view>-->
  </div>
</template>

<script>
import FooterBar from './components/FooterBar'
import HeaderBar from './components/HeaderBar'
import AppMain from './components/AppMain'
import NavBar from './components/NavBar'

export default {
  name: 'app',
  components: {
    HeaderBar,
    FooterBar,
    AppMain,
    NavBar
  },
  mounted () {
    this.$store.dispatch('GET_SYSTEM_NAME_AC')
    this.$store.dispatch('GET_USER_NAME_AC')
    this.$store.dispatch('GET_USER_GROUP_AC')
  }
}

</script>

<style lang="scss">
  @import '~bulma';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  
  .content-node{
    display: block;
    position: relative;
    overflow: auto;
    
    >div:nth-child(1){
      width: 200px;
      height: 100%;
      float: left;
    }

    >div:nth-child(2){
      height: 100%;
      margin-left: 200px;
      padding-right: 30px;
      padding-bottom: 100px;
    }
    
  }
}
</style>
