<!-- 头部组件 -->


<template>
    <div id='header-node' class='hero-head'>
      <div class="container">
        <img src="../assets/images/monitor-logo.svg"/>
        Monitor
      </div>
    </div>
</template>
<style lang="scss">
  @import "../assets/css/style";
  
  #header-node{
    
    width: 100%;
    position: relative;
    display: block;
    background-color: $background;
    box-shadow: 0px 1px 6px $background;;
    z-index: 1;
    color:white;


    img{
      height: auto;
      width: 30px;
      vertical-align: sub;
    }
  
    > div {
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-weight: bold;
      font-size: 24px;
    }

  }
  
</style>
