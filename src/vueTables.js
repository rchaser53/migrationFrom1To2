const Vue = require('vue')
const { ClientTable, Event } = require('vue-tables-2')

Vue.use(ClientTable);
var app = new Vue({
  el: '#app',
  template: `
    <div>
      <v-client-table :data="tableData" :columns="columns"></v-client-table>
    </div>
  `,
  data: function() {
    return {
      columns: ['id','name','age'],
      tableData: [
        { id: 1, name: 'nyan', age: 2 },
        { id: 2, name: 'myan', age: 5 },
        { id: 3, name: 'meow', age: 3 },
      ]
    }
  },
  mounted: function() {
  },
  methods: {
  }
})