import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: {
        template: require('@/views/home.html')
      }
    },
    {
      path: '/bootcamp',
      name: 'Bootcamp',
      component: {
        template: require('@/views/bootcamp.html')
      }
    },
    {
      path: '/events',
      name: 'Events',
      component: {
        template: require('@/views/events.html')
      }
    },
    {
      path: '/contact-us',
      name: 'Contact us',
      component: {
        template: require('@/views/contact-us.html')
      }
    }
  ]
})
