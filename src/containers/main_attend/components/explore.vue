<template>
  <table class="table table-hover">
    <tbody>
      <exploreChild/>
    </tbody>
  </table>
</template>

<script>
  import ExploreChild from './exploreChild.vue'

  export default {
    name: 'main_past_attendance',
    components: {
      ExploreChild
    }
  }
</script>
