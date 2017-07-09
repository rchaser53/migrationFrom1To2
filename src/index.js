const Vue = require('vue')

var child = Vue.extend({
    template: `<div>
      <h2>nya-n</h2>
      <div>{{label}}</div>
    </div>
    `,
    props: ['label']
});

var app = new Vue({
  el: '#app',
  components: {
    child,
  },
  template: `
    <div>
      <button v-on:click='switch'>switch</button>
      <div v-if='flag' transition="fade">
        <p>hoge-</p>
      </div>
      <child label='hogeratta' />
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