
<template>
  <div class="card">

    <div class="card-body">
      <h4 class="card-title mb-0">
        Tech
      </h4>
      <input-tag placeholder="Vue.js" :tags="model.tech"></input-tag>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import InputTag from 'vue-input-tag'

export default {
  props: ['model'],
  components: { InputTag }
}
</script>
