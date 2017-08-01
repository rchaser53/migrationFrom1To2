const Vue = require('vue')

const child = Vue.extend({
  template: '#childId',
  /* propsを宣言しないとdataが優先される(warningはない) */ 
  // props: ['property'],
  data: function(){
    return {
      property: 'child'
    };
  }
});

const app = new Vue({
  el: '#app',
  components: {
    child
  },
  data: function(){
    return {
      property: 'parent'
    };
  }
})