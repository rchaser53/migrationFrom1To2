const Vue = require('vue')
const modal = require('./modal.vue');

var app = new Vue({
  el: '#app',
  components: {
    modal: modal
  },
  template: `
    <div>
      <button v-on:click='toggle'>toggle</button>
      <modal key='test2' :callback='toggle' effect="fade" :value='flag'>
        <div slot="modal-header" class="modal-header">
          <h4 class="modal-title">Modal title</h4>
        </div>
        <div slot="modal-body" class="modal-body">gya-n</div>
      </modal>
    </div>
  `,
  data: {
    flag: false,
    numA: 11,
    numB: 12
  },
  mounted: function() {
    document.querySelector('.modal').addEventListener('click', () => {
      Vue.set(this, 'flag', false)
    })
  },
  methods: {
    toggle: function() {
      Vue.set(this, 'flag', !this.flag)
    },
    multiple: function(numA, numB) {
      return `class${numA * numB}`
    }
  }
})