// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'

import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss'
import 'theme-corporate/stylesheets/theme.scss'

// homepage
import Intro from '@/components/Intro'
import Perks from '@/components/Perks'
import Video from '@/components/Video'

// google-map
import * as VueGoogleMaps from 'vue2-google-maps'

// i18n locales
import messages from '@/assets/i18n'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCPLizaiBApxxBBqDbmRHQ-2UyOQMyEHkA',
    libraries: 'places'
  }
})

// i18n
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'ua',
  messages
})

Vue.config.productionTip = false

Vue.component('Video', Video)
Vue.component('Intro', Intro)
Vue.component('Perks', Perks)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  template: '<App/>',
  components: {
    App
  }
})
