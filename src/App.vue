
<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <!-- MODAL-COMPONENT -->
    <!-- FLASH-COMPONENT -->
    <!-- BREADCRUMB-COMPONENT -->
    <!-- FOOTER-COMPONENT -->
  </div>
</template>

<script>
import Navbar from './containers/app_navbar'

export default {
  name: 'app',

  // Top-Level Application Components
  components: {
    Navbar
  },

  // Top-Level page Meta
  metaInfo: {
    title: 'Home', // set a title
    titleTemplate: 'RCOS - %s', // title is now "RCOS - Loading..."
    htmlAttrs: {
      lang: 'en'
    }
  }

}
</script>
