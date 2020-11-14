import Vue from 'vue'
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
Vue.config.productionTip = false
library.add(fas,fab);

Vue.component('font-awesome-icon',FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
