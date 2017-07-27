const Vue = require('vue')

const childB = Vue.extend({
  template: '#nestTemplate',
  data: function() {
    return {
      nestProperty: 'pigya'
    }
  }
})

const child = Vue.extend({
  template: '#insideTemplate',
  data: function() {
    return {
      propertyA: 'value'
    }
  }
})

var app = new Vue({
  el: '#app',
  components: {
    child,
    childB
  },
  template: `<div>
    <child></child>
  </div>`,
  methods: {
    toggle: function() {
      Vue.set(this, 'flag', !this.flag)
    }
  }
})