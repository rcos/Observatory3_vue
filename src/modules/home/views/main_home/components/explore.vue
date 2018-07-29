<template>
  <div class="row">
    <ExploreChild :details="details[0]" />
    <ExploreChild :details="details[1]" />
    <ExploreChild :details="details[2]" />
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
          {title: 'Handbook', desc: 'Learn more about our organization\'s practices', link: 'https://handbook.rcos.io'}
        ]
      }
    }
  }
</script>
