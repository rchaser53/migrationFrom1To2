const Vue = require('vue')

module.exports = Vue.extend({
    template: `<div>
      <h2>nya-n</h2>
      <div>{{label}}</div>
    </div>
    `,
    props: [
      { "name": "label", "required": true }
    ]
});