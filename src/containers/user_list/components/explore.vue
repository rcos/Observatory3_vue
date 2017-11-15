<template>
  <div class="container-fluid">
    <div class="row">
      <ExploreChild/>
      <ExploreChild/>
      <ExploreChild/>
      <ExploreChild/>
      <ExploreChild/>
      <ExploreChild/>
    </div>
  </div>
</template>

<script>
  import ExploreChild from './exploreChild.vue'

  export default {
    name: 'user_list',
    components: {
      ExploreChild
    }
  }
</script>
