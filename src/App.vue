
<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
    <Notification/>
  </div>
</template>

<script>
import Navbar from './containers/app_navbar'
import Footer from './containers/app_footer'
import Notification from './containers/app_notification'

export default {
  name: 'app',

  // Top-Level Application Components
  components: {
    Navbar,
    Notification,
    Footer
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
</style>
