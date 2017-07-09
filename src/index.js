const Vue = require('vue')

const modal = require('./modal.vue');
const child = require('./child')

var app = new Vue({
  el: '#app',
  components: {
    modal: modal,
    child: child
  },
  template: `
    <div>
      <button v-on:click='toggle'>toggle</button>
      <modal key='test2' :callback='toggle' effect="fade" :value='flag'>
        <div slot="modal-body" class="modal-body" style="display:block; height:1000px;">gya-n</div>
      </modal>
      <child label='howaxtu!?' />
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