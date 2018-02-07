
<template>
  <div id="app">
    <AppNavbar/>

    <transition name="fade">
      <router-view/>
    </transition>

    <AppFooter/>
    <Notification/>
  </div>
</template>

<script>
import AppNavbar from './containers/app_navbar'
import AppFooter from './containers/app_footer'
import Notification from './containers/app_notification'

export default {
  name: 'app',

  // Top-Level Application Components
  components: {
    AppNavbar,
    AppFooter,
    Notification
  },

  // Top-Level page Meta
  metaInfo: {
    title: 'Home', // set a title
    titleTemplate: 'RCOS - %s', // title will always be "RCOS - ..."
    htmlAttrs: {
      lang: 'en'
    }
  }

}
</script>

<style type="text/css">
  body {
    background-color: #f3f3f3;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .25s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
