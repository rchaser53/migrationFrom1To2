const Vue = require('vue')

var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

var app = new Vue({
  el: '#app',
  template: `
    <div>
      <v-touch tag="button" v-on:tap="onSwipeLeft" style="display:block;width:200px; height:200px; background-image:url('src/cat.jpg')">
        <span>nya-n</span>
      </v-touch>
    </div>
  `,
  data: {
    flag: false
  },
  methods: {
    onSwipeLeft: () => {
      console.log('swipe left!')
    }
  }
})