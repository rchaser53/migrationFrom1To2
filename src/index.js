const Vue = require('vue')

var app = new Vue({
  el: '#app',
  template: `
    <div>
      <button v-on:click='toggle'>toggle</button>
      
      <transition v-if='flag' name="fade">
        <p>hoge-</p>
      </transition>
    </div>
  `,
  data: {
    flag: true
  },
  methods: {
    toggle: function() {
      console.log(1234)
      this.flag = !this.flag
    }
  }
})