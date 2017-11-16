<template>
  <div class="container-fluid">
    <div class="row">
      <Child v-for="model in collection" :model="model" />
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
