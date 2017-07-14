const Vue = require('vue')

Vue.directive('as-locale', {
    params: ['lang'],
    bind: function () {
      console.log(this.params.lang, 'bind');
    }
});

var app = new Vue({
  el: '#app',
  template: `
    <div>
      <button v-on:click='switch'>switch</button>
      <div v-if='flag' transition="fade">
        <p>hoge-</p>
      </div>
      <div v-as-locale lang="234">aaa</div>
    </div>
  `,
  data: {
    flag: true
  },
  init: function(){
    console.log(`init`)
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

