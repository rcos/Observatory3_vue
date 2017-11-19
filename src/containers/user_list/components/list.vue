
<template>
  <div class="row">
    <Child v-for="model in collection" :key="model._id" :model="model" />
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
