<template>
    <div>
      <button @click='btnFunc'>{{this.msg}}</button>
      <div>this is template body</div>

      <ul id="example-1">
        <li v-for="item in items">
          {{ item.message }}
        </li>
      </ul>

      <ul>
        <li v-for="article in articles">
          {{article.title}}
        </li>
      </ul>
      
      <button @click="showHandle">show</button>
      <div v-show="show">
        <p>showshowshowshowshowshowshowshowshow</p>
      </div>
      <div>
        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>
        <br>
        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>
        <br>
        <span>Picked: {{ picked }}</span>
        
      </div>

      
    </div>
</template>
<style>

</style>
<script>
    export default{
      data () {
        return {
          msg: 'click here', 
          items: [
              { message: 'Foo' },
              { message: 'Bar' }
            ],
          articles:'',
          show:false,
          picked:''
        }
      },
      methods: {
        btnFunc () {
          console.log('test') /* test */
          console.log(this.$http) /* test vue resource */
        },
        showHandle () {
        console.log('show')
          this.show=true;
        }
        

      },
      mounted () {
          this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
              headers: {
              },
              emulateJSON: true
          }).then(function(response) {
          console.log(response,'aaa');
              // 这里是处理正确的回调  
            this.articles = response.data.subjects
              // this.articles = response.data["subjects"] 也可以
          }, function(response) {
              // 这里是处理错误的回调
              console.log(response)
          });
        }
    }
</script>
