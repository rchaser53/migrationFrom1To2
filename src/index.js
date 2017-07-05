const Vue = require('vue')

var app = new Vue({
  el: '#app',
  template: `
    <div>
      <button v-on:click='toggle'>toggle</button>
      <transition v-if='flag' name="fade">
        <p v-bind:class="multiple(numA, numB)">hoge-</p>
      </transition>
    </div>
  `,
  data: {
    flag: true,
    numA: 11,
    numB: 12
  },
  methods: {
    toggle: function() {
      console.log(1234)
      this.flag = !this.flag
    },
    multiple: function(numA, numB) {
      return `class${numA * numB}`
    }
  }
})