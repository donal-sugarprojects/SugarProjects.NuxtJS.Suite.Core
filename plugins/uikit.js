// import Vue from 'vue'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

// loads the Icon plugin
UIkit.use(Icons)
UIkit.container = '#__nuxt'

// Vue.prototype.$uikit = UIkit

export default ({ app }, inject) => {
  inject('uikit', UIkit)
}
