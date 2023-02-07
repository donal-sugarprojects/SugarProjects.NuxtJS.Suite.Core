// plugins/index.js
import * as helpers from './helpers/index.js'
// get the options out using lodash templates
const options = JSON.parse(`<%= JSON.stringify(options) %>`)
// extract the namespace from the options
const { namespace } = options
// create the plugin
export default ({ store, app }, inject) => {
  // get a reference to the vuex store's state
  const { state } = store
  // inject an object of functions into the app
  inject(namespace, {
    convertMarkdown(markdown) {
      return helpers.convertMarkdown(markdown)
    },
    compareValues(key, order) {
      return helpers.compareValues(key, order)
    },
    formatDate(dateString, showTime) {
      return helpers.formatDate(dateString, showTime)
    },
    timeSince(dateString) {
      return helpers.timeSince(dateString)
    }
  })
}
