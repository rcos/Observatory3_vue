<template>
  <div class="row">
    <ExploreChild/>
    <ExploreChild/>
    <ExploreChild/>
  </div>
</template>

<script>
  import ExploreChild from './exploreChild.vue'

  export default {
    name: 'main_developers',
    components: {
      ExploreChild
    }
  }
</script>
