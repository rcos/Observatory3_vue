<template>
  <div class='row' v-if="collection[0]">
    <div v-for="m in collection" class='col-lg-12'>
      <h2>
        {{ m.verified }}
      </h2>
    </div>
  </div>
  <div v-else>
    <table class="table table-hover">
      <tbody>
        <exploreChild/>
      </tbody>
    </table>
  </div>
</template>

<script>
  import ExploreChild from './exploreChild.vue'

  export default {
    name: 'main_past_attendance',
    props: ['collection'],
    components: {
      ExploreChild
    }
  }
</script>
