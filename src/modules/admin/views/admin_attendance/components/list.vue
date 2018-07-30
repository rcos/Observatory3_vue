
<template>
  <table class="table table-hover table-striped">
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Type</th>
        <th scope="col">Attendees</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="each in collection">
        <th scope="row">{{ each.date }}</th>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['collection']
}
</script>
