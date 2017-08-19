const Vue = require('vue')

module.exports = new Vue({
  el: '#app',
  data: function() {
    return {
      direct: false,
      bySet: false
    }
  },
  template: `<div>
    <button v-on:click="directMethod">direct</button>
    <button v-on:click="bySetMethod">bySet</button>
  </div>
  `,
  methods: {
    directMethod() {
      this.direct = !this.direct
    },
    bySetMethod() {
      Vue.set(this, 'bySet', !this.bySet)
    }
  },
  watch: {
    direct(newValue, oldValue) {
      console.log('direct')
    },
    bySet(newValue, oldValue) {
      console.log('bySet')
    }
  }
});