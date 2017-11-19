
<template>
  <div class="row">
    <div class='col-lg-2 mb-4' v-for="model in collection" :key="model._id">
      <Child :model="model" />
    </div>
  </div>
</template>

<script>
  import Child from './child.vue'

  export default {
    props: ['collection'],
    components: {
      Child
    }
  }
</script>
