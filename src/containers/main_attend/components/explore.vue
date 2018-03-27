<template>

  <div class='row' v-if="collection[0]">
    <div v-for="m in collection" class='col-lg-12'>
      <table class="table table-hover">
        <tbody>
          <exploreChild :attendElement="m"/>
        </tbody>
      </table>
    </div>
  </div>

  <div v-else>
    <table class="table table-hover">
      <tbody>
        <exploreChild :attendElement="m"/>
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
