const Vue = require('vue')

var app = new Vue({
  el: '#app',
  template: `
    <div>
      <button v-on:click='toggle'>switch</button>

      
        <transition
          v-bind:css="false"
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
        >
          <div v-if='flag' style="transition:opacity 1s linear;">
            <p>hoge-</p>
          </div>
        </transition>
      

    </div>
  `,
  data: {
    flag: false
  },
  methods: {
    toggle: function() {
      Vue.set(this, 'flag', !this.flag)
    },
    beforeEnter: function(el) {
      console.log('beforeEnter', el)
      el.style.opacity = 0
    },
    enter: function(el) {
      console.log('enter', el)
      setTimeout(() => {
        el.style.opacity = 1
      }, 0)
    }
  }
})