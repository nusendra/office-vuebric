// import Style from './components/Style.vue'
import Button from './components/Button.vue'
import TextField from './components/TextField.vue'

// Install the components
export function install (Vue) {
  // Vue.use(Style)
  Vue.component('ov-button', Button)
  Vue.component('ov-textfield', TextField)
  /* -- Add more components here -- */
}

// Expose the components
export {
  Button,
  TextField,
  /* -- Add more components here -- */
}

/* -- Plugin definition & Auto-install -- */
/* You shouldn't have to modify the code below */

// Plugin
const plugin = {
  /* eslint-disable no-undef */
  version: VERSION,
  install,
}

export default plugin

// Auto-install
let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}
