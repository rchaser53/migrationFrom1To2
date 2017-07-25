const Vue = require('vue')

var child;

child = Vue.extend({
  template: "#child",
  props: ['prop', 'clickevent']
})

Vue.component('child', child)

const arr = [1, 2, 3]
arr.forEach((elem) => {
  new Vue({
    el: `#app${elem}`,
    components: {
      child
    },
    data: {
      property: elem
    },
    mounted: function() {
      console.log(elem)
    },
    methods: {
      nyan: function() {
        console.log(elem)
      }
    }
  })
})

