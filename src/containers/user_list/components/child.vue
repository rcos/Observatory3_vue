<template>
  <div class="card">
    <a :href="'/#/users/' + model._id">
      <img class="card-img-top" :src="model.avatar"/>
    </a>

    <div class="card-body text-center py-2 px-2">
      <a :href="'/#/users/' + model._id">
        {{model.name}}
      </a>
      <br>
      <span class="badge badge-dark" v-if="model.role === 'admin'">Coordinator</span>
      <span class="badge badge-dark" v-else-if="model.role === 'mentor'">Mentor</span>
      <span class="badge badge-primary" v-else>Student</span>
    </div>

  </div>
</template>

<script>
export default {
  props: ['model']
}
</script>
