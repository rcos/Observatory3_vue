
<template>
  <div id="app">
    <Notification/>
    <AppNavbar/>
    <router-view/>
    <AppFooter/>
  </div>
</template>

<script>
import AppNavbar from '@/containers/app_navbar'
import AppFooter from '@/containers/app_footer'
import Notification from '@/containers/app_notification'

export default {
  name: 'app',
  components: {
    AppNavbar,
    AppFooter,
    Notification
  },
  metaInfo: {
    title: 'Lodaing...',
    titleTemplate: 'RCOS - %s', // title will always be "RCOS - ..."
    htmlAttrs: {
      lang: 'en'
    }
  },
  created () {
    // Authenticates on application start
    this.$store.dispatch('auth/fetchUserProfile')
  }
}
</script>

<style type="text/css">
  body {
    background-color: #f3f3f3;
  }
</style>
