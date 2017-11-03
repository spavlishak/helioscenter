<template>
<div id="app">
  <app-navbar></app-navbar>
  <transition appear name="fade" mode="out-in">
    <router-view></router-view>
  </transition>
  <app-footer></app-footer>
</div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s
}

.fade-enter,
.fade-leave {
  opacity: 0
}
</style>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  components: {
    AppNavbar: Navbar,
    AppFooter: Footer
  },
  name: 'app'
}
</script>
