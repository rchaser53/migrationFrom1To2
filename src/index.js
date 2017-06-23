const Vue = require('vue')

var app = new Vue({
  el: '#app',
  template: '<p>{{seen}}</p>',
  data: {
    seen: true
  }
})