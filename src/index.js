const Vue = require('vue')
const modal = require('vue-strap').modal;

var app = new Vue({
  el: '#app',
  components: {
    modal: modal
  },
  template: `
    <div>
      <button v-on:click='toggle'>toggle</button>
      <transition-group v-if='flag' name="fade">
        <p key='hoge' v-bind:class="multiple(numA, numB)">hoge-</p>
      </transition-group>
      111
        <modal key='test2' :effect='"show"' :value='flag'>
          <div slot="modal-header" class="modal-header">
            <h4 class="modal-title">Modal title</h4>
          </div>
          <div slot="modal-body" class="modal-body">...</div>
        </modal>
    </div>
  `,
  data: {
    flag: true,
    numA: 11,
    numB: 12
  },
  methods: {
    toggle: function() {
      console.log(1234)
      this.flag = !this.flag
    },
    multiple: function(numA, numB) {
      return `class${numA * numB}`
    }
  }
})