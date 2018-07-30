<template>
  <div class="row">
    <div class="col-lg-12">
      <table class="table table-responsive table-hover table-striped">
        <thead>
          <th>Name</th>
          <th>Name</th>
          <th>Projects</th>
        </thead>
        <tbody>
          <tr v-for="member in members" :key="member._id">
            <td>
              <img :src="model.avatar"/>
            </td>
            <td>{{ member.name }}</td>
            <td>{{ member.projects.length }}</td>
            <td>
              <button class="btn btn-sm btn-outline-danger">
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    model: 'smallgroup/model',
    members: 'smallgroup/smallGroupMembers'
  })
}
</script>

