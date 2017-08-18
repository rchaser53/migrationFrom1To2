const Vue = require('vue')

const app = new Vue({
  el: '#app',
  template: `
  <div>
    <div v-on:click="clickEvent">base</div>
  </div>
  `,
  data: function(){
    return {
      flag: false
    }
  },
  beforeUpdate: function() {
    console.log('before Update')
  },
  methods: {
    clickEvent(){
      console.log('click')
      const self = this;
      setTimeout(() => {
        console.log('setTimeout1')
        Vue.set(self, 'flag', false)
      }, 0)
      // setTimeout(() => {
        // console.log('setTimeout2')
      const now = Date.now();

      while (now + 1000 > Date.now()) {
        console.log('stop')
      }

        Vue.set(self, 'flag', true)
      // }, 0)
      // console.log('here')
    }
  },
  watch: {
    flag: function(newValue, oldValue) {
      console.log('watch', newValue, oldValue)
    }
  }
})