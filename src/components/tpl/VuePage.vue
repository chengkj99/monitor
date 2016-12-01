<template lang="html">
  <div class="page">
    <ul>
      <li><a @click="prevClick()">上一页</a></li>
      <li v-for="index in pages"  :class="{ active: curPage == index}">
        <a @click="btnClick(index)">{{ index }}</a>
      </li>
      <li><a @click="nextClick()">下一页</a></li>
      <li><a>共<i>{{totalPages}}</i>页</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      dataNum: {
          type: Number
          , default: 100
      }
      , cur: {
          type: Number
          , default:1
      }
  
      , each: {
          type: Number
          , default: 10
      }
      , visiblepage: {
          type: Number
          , default: 10
      }
    }, 
    data () {
      return {
          curPage:0
      }
    },
    created: function(){
      this.curPage = this.cur;
    },
    computed: {
    totalPages: function(){
        return Math.ceil(this.dataNum / this.each) || 0
    }, 
    pages: function(){
        var lowPage = 1;
        var highPage = this.totalPages;
        var pageArr = [];
        if(this.totalPages > this.visiblepage){
            var sub = Math.ceil(this.visiblepage/2);
            if(this.curPage > sub && this.curPage < this.totalPages - sub +1){
                lowPage = this.curPage - sub;
                highPage = this.curPage + sub - 2;
            }else if(this.curPage <= sub){
                lowPage = 1;
                highPage = this.visiblepage;
            }else{
                lowPage = this.totalPages - this.visiblepage + 1;
                highPage = this.totalPages;
            }
        }

        while(lowPage <= highPage){
            pageArr.push(lowPage);
            lowPage ++;
        }
        return pageArr;
    },
   methods: {
     btnClick (index) {
     alert('ssss')
       this.curPage = index;
       this.$emit('change-page', index)
     }
     , 
     nextClick () {
       if (this.curPage < this.totalPages) {
         this.curPage++;            
         this.$emit('change-page', this.curPage)
       }
     }
     , 
     prevClick () {
       if (this.curPage > 0) {
         this.curPage--;            
         this.$emit('change-page', this.curPage)
       }
     }
    }
}
  
  }
  
</script>