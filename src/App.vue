
<template>
  <div id="app">
    <Notifications/>
    <AppNavbar/>
    <div class="router-wrapper">
      <router-view/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppNavbar from '@/components/Navbar'
import AppFooter from '@/components/Footer'
import Notifications from '@/modules/notification/components/Notifications'

export default {
  name: 'app',
  components: {
    AppNavbar,
    AppFooter,
    Notifications
  },
  metaInfo: {
    title: 'Loading...',
    titleTemplate: 'RCOS - %s', // title will always be "RCOS - ..."
    htmlAttrs: {
      lang: 'en'
    }
  }
}
</script>

<style type="text/css">
  html {
    height: 100%;
  }

  body {
    height: 100%;
    background-color: #f3f3f3;
  }

  .router-wrapper {
    width: 100%;
    height: 100%;
    margin-top: 3.5rem;
  }

  #app {
    height: 100%;
  }
</style>
