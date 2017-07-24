const Vue = require('vue')

const child = Vue.extend({
  props: {
    prop: {}
  },
  template: `<div>
  nya-n
    {{prop}}
  </div>`
})

const app = new Vue({
  el: '#app',
  components: {
    child
  },
  data: {
    propertyA: 23
  },
  mounted: function() {
    console.log('mounted')
  },
  methods: {
    clickEvent: () => {
      console.log('click')
    }
  }
})