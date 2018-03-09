import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'

import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'
Vue.use(Vuetify)
Vue.use(VueResource);

export const eventBus = new Vue({
	methods: {
		mappingChanged(mapping) {
      this.$emit('mappingChanged',mapping)
    }
	}
})

new Vue({
  el: '#app',
  render: h => h(App)
})
