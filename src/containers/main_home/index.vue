<template>

  <div>
    <div class="jumbotron jumbotron-fluid hero">
      <div class="row text-center">
        <div class="col-lg-12">
        <!-- <h1 class="display-5">Rensselaer Center for Open Source</h1> -->
          <img src="https://raw.githubusercontent.com/rcos/rcos-branding/master/img/lockup-red.png" width="400px">
        </div>
        <!-- <p class="lead">A community of Open Source developers at RPI </p> -->
      </div>
    </div>

    <div class="container h-100">
      <Explore/>
      <hr/>
      <div class="row pt-4">
        <MainText/>
        <Sidebar/>
      </div>
    </div>

  </div>
</template>

<script>

import MissionStatement from './components/missionStatement.vue'
import Explore from './components/explore.vue'
import MainText from './components/text.vue'
import Sidebar from './components/sidebar.vue'

export default {
  name: 'main_home',
  metaInfo: {
    title: 'Main - Home'
  },
  components: {
    MissionStatement,
    Explore,
    MainText,
    Sidebar
  }
}
</script>

<style>
.hero {
  /*background:#da291c;*/
  /*color: #ffffff;*/
}
</style>
