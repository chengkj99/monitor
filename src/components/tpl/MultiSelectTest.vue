<template>
  <div>
    <multiselect
      :options="options"
      :selected="selected"
      :multiple="true"
      :limit="2"
      @input="updateMultiValue"
      :searchable="true"
      :close-on-select="false"
      :clear-on-select="false"
      :taggable="true"
      :tag="addTag"
    >
    </multiselect>
    <button @click="saveHandle">tijiao</button>
  </div>
  
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  components: { Multiselect },
  data () {
    return {
      selected: null,
      options: ['list', 'of', 'options'],
      taggingOptions:[],
      taggingSelected:[]
      
    }
  },
  methods: {
    updateMultiValue (newSelected) {
      this.selected = newSelected
      console.log(this.selected)
    },
    addTag (newTag) {
      const tag = {
        name: newTag,
          // Just for example needs as we use Array of Objects that should have other properties filled.           // For primitive values you can simply push the tag into options and selected arrays.            code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
        }
        this.taggingOptions.push(tag)
        this.taggingSelected.push(tag)
        alert('qqq')
    },
    saveHandle () {
      console.log(this.selected)
      console.log(this.taggingOptions)
      console.log(this.taggingSelected)
    }
  }
}
  
  
</script>