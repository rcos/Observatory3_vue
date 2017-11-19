<template>
  <div class="card">
    <img class="card-img-top" :src="model.avatar"/>
    <div class="card-body text-center py-2 px-2">
      <a :href="'/#/users/' + model._id">
        {{model.name}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['model']
}
</script>
