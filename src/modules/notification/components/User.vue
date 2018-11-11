<template>
  <!-- { schema, related_schema, rel } -->
  <div class="card mb-3">
    <div class="card-body">
      <p class="lead">User</p>
      <table class="table">
        <thead>
          <th>E-Mail</th>
          <th>Username</th>

        </thead>
        <tbody>
          <tr>
            <td>{{model.email}}</td>
            <td>{{model.username}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
export default {
  props: ['model']
}
</script>
