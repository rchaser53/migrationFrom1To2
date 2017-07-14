const Vue = require('vue')
const VueFormGenerator = require('vue-form-generator')
Vue.use(VueFormGenerator);

var app = new Vue({
  el: '#app',
  template: `
    <div>
      <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
    </div>
  `,
  data: function() {
    return {
      model: {
        name: "",
        password: "",
        skills: []
      },
      schema: {
        fields: [{
          type: "input",
          inputType: "text",
          label: "Name",
          model: "name",
          placeholder: "Your name",
          featured: true,
          required: true
        }, {
          type: "input",
          inputType: "password",
          label: "Password",
          model: "password",
          min: 6,
          required: true,
          hint: "Minimum 6 characters",
          validator: this.customValidate
          // validator: VueFormGenerator.validators.string
        }, {
          type: "select",
          label: "Skills",
          model: "skills",
          values: ["Javascript", "VueJS", "CSS3", "HTML5"]
        }]
      },
      formOptions: {
        validateAfterLoad: true,
        validateAfterChanged: true
      }
    }
  },
  mounted: function() {
  },
  methods: {
    customValidate: function(value, field, model, messages) {
      if (Math.random() * 10 > 5) return []
      const err = ['gya-n'];
      return err;
    },
  }
})