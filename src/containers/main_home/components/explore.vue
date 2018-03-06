<template>
  <div class="row pb-12">
    <ExploreChild :details="details[0]"></ExploreChild>
    <ExploreChild :details="details[1]"></ExploreChild>
    <ExploreChild :details="details[2]"></ExploreChild>
  </div>
</template>

<script>
  import ExploreChild from './exploreChild.vue'

  export default {
    name: 'main_developers',
    components: {
      ExploreChild
    },
    data () {
      return {
        details: [
          {title: 'Developers', desc: 'We are a group of passionate open source developers at RPI.', link: '/#/users'},
          {title: 'Projects', desc: 'We work on a bunch of awesome open source projects.', link: '/#/projects'},
          {title: 'Achievements', desc: 'We are not your average college students.', link: '/#/achievements'}
        ]
      }
    }
  }
</script>
