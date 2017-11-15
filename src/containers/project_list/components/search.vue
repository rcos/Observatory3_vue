<template>
  <div class="row pt-3 pb-2">
    <div class="col-lg-6">
      <form class="form-inline pb-3">
        <input class="form-control mr-sm-" type="search" placeholder="Search projects">
      </form>
    </div>
    <div class="col-lg-6">
      <div class="btn-toolbar" role="toolbar">
        <button type="button"></button>
        <button type="button">Past</button>
        <button type="button" class="btn btn-danger">Add a Project</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search'
  }
</script>
