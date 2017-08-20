import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

var app = new Vue({
  el: '#app1',
  store,
  template: `
    <div v-on:click="fireIncrement">app1</div>
  `,
  data: {
    flag: false
  },
  methods: {
    fireIncrement() {
      store.commit('increment')
    }
  }
})

var app = new Vue({
  el: '#app2',
  store,
  template: `
    <div v-on:click="fireIncrement">app2</div>
  `,
  data: {
    flag: false
  },
  methods: {
    fireIncrement() {
      store.commit('increment')
    }
  }
})