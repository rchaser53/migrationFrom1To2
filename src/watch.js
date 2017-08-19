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
    <div>
      <button v-on:click="syncDirect">sync direct</button>
      <button v-on:click="asyncDirect">async direct</button>
    </div>
    <div>
      <button v-on:click="syncBySet">bySet</button>
      <button v-on:click="asyncBySet">bySet</button>
    </div>
  </div>
  `,
  methods: {
    syncBySet() {
      Vue.set(this, 'bySet', !this.bySet)
      this.timer();
      Vue.set(this, 'bySet', !this.bySet)
    },
    asyncBySet() {
      Vue.set(this, 'bySet', !this.bySet)
      setTimeout(() => {
        Vue.set(this, 'bySet', !this.bySet)
      }, 1000)
    },
    syncDirect() {
      this.direct = !this.direct
      this.timer()
      this.direct = !this.direct
    },
    asyncDirect() {
      this.direct = !this.direct
      setTimeout(() => {
        this.direct = !this.direct
      }, 1000)
    },
    timer() {
      const nowTime = Date.now()
      while(Date.now() < nowTime + 1000) {
        console.log(1)
      }
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