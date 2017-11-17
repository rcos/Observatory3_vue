<template>
  <div class="container h-100">
    <div class="row d-flex justify-content-center">
        <div class="col-lg-12">
          <MissionStatement/>
        </div>
    </div>
    <Explore/>
    <hr/>
    <div class="row pt-4">
      <MainText/>
      <Sidebar/>
    </div>
</div>
</template>

<script>

import MissionStatement from './missionStatement.vue'
import Explore from './explore.vue'
import MainText from './text.vue'
import Sidebar from './sidebar.vue'

export default {
  name: 'main_home',
  components: {
    MissionStatement,
    Explore,
    MainText,
    Sidebar
  }
}
</script>
