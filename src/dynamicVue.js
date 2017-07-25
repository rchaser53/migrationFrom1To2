const Vue = require('vue')

var child;

child = Vue.extend({
  template: "#child",
  props: ['prop', 'clickevent'],
  mounted: function() {
    console.log('child')
  }
})

Vue.component('child', child)

const arr = [1,2,3]
var index = 0;
const nyan = () => {
  const elem = arr[index];

  if (arr.length < index) return

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

  index++
}
setInterval(nyan, 10000)