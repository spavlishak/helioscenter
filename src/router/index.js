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
      path: '/about-us',
      name: 'About us',
      component: {
        template: require('@/views/about-us.html')
      }
    },
    {
      path: '/services',
      name: 'Services',
      component: {
        template: require('@/views/services.html')
      }
    },
    {
      path: '/laboratory',
      name: 'Laboratory',
      component: {
        template: require('@/views/laboratory.html')
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
