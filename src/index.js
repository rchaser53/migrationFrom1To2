const Vue = require('vue')

var app = new Vue({
  el: '#app',
  template: `
    <div>
      <button v-on:click='switch'>switch</button>
      <div v-if='flag' transition="fade">
        <p>hoge-</p>
      </div>
    </div>
  `,
  data: {
    flag: true
  },
  methods: {
    switch: function() {
      console.log(1234)
      this.flag = !this.flag
    }
  }
})

Vue.transition('fade', {
  afterEnter: function(element, done) {
    console.log('after')
  },
  leave: function(element, done) {
    console.log('leave')
  }
})