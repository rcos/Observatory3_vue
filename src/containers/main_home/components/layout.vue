<template>
  <div class="container">

    <MissionStatement/>
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
