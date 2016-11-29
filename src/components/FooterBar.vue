<!-- 尾部组件 -->

<template>
    <div id="footer-node">
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">
            <p>
              <strong>Monitor</strong>
                by Kangjian Cheng
              
            <!-- 
                The source code is licensed
              <a href="http://opensource.org/licenses/mit-license.php">
                MIT
              </a>. 
                The website contentis licensed 
              <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                CC ANS 4.0
              </a>
            -->
            </p>
            <p class="icon">
              <img src="../assets/images/monitor-logo.svg"/>
            </p>
          </div>
        </div>
      </footer>
    </div>
</template>

<style lang="scss">
  @import "../assets/css/style";
  
  #footer-node{
    clear: both;
    position: absolute;
    bottom: 0px;
    display: block;
    width: 100%;

    .footer{
      background-color: $background;
      .container{
        
        .content{
          
          >p{
            color: $white;

            strong{
              color: $white;
            }

          }
        }
      }

    }
    
    .icon{
      >img{
        width: 20px;
        height: auto;
      }
    }
  }
  
</style>
