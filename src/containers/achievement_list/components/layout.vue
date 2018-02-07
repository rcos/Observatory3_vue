
<template>
  <div class="container pt-4">

    <h3>Achievements</h3>


    <div class="row">
      <div class="col-lg-9">
        <ListView :collection="collection"/>
      </div>

      <div class="col-lg-3">
        <ProjectPinned/>
        <br>
        <AchievementForm/>
      </div>

    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import ListView from './list.vue'
import ProjectPinned from './pinned.vue'
import AchievementForm from './AchievementForm.vue'
import { mapGetters } from 'vuex'

export default {
  props: ['collection'],
  computed: mapGetters({
    fetching: 'achievement/fetching'
  }),
  components: {
    ListView,
    ProjectPinned,
    AchievementForm
  }
}
</script>

