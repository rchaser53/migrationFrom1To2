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
  template: `
  <div>
    <div v-on:click="clickEvent">base</div>
    <child v-bind:prop="propertyA"></child>
  </div>
  `,
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