<!-- 日历视图 -->

<template>
  <div>
    <full-calendar class="test-fc" :events="fcEvents" first-day='1'
                   @changeMonth="changeMonth"
                   @eventClick="eventClick"
                   @dayClick="dayClick"
                   @moreClick="moreClick">
    </full-calendar>
  </div>
</template>
<script>
  import fullCalendar from 'vue-fullcalendar'

let demoEvents = [
    {
      title    : 'chengkangjianchengkangjianchengkangjianchengkangjian ',
      start    : '2016-07-25',
      end      : '2016-12-06',
      cssClass : 'family'
    },
    {
      title : 'kangjiancheng hahahaha',
      start : '2016-12-07',
      end : '2016-12-09',
      cssClass : 'work'
    },
    {
      title : 'kangjiancheng',
      start : '2016-12-11',
      end : '2016-12-15'
    },
    {
      title : '程康健 王磊',
      start : '2016-12-30',
      end : '2016-12-30'
    },
  ]

  export default{
    data () {
      return {
      fcEvents : demoEvents
    }
	},
  methods : {
    'changeMonth' (start, end, current) {
      console.log('changeMonth', start, end, current)
    },
    'eventClick' (event, jsEvent, pos) {
       console.log('eventClick', event, jsEvent, pos)
    },
    'dayClick' (day, jsEvent) {
      console.log('dayClick', day, jsEvent)
    },
    'moreClick' (day, events, jsEvent) {
      console.log('moreCLick', day, events, jsEvent)
    }
  },
  components : {
   fullCalendar
  }
}
</script>
<style lang='scss'>
  .app{
    color:green;
  }
</style>