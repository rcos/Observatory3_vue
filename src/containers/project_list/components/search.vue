<template>
  <div class="row pt-3 pb-2">
    <div class="col-lg-9">
      <form class="form-inline pb-3">
        <input class="form-control w-100" type="search" placeholder="Search projects">
      </form>
    </div>
    <div class="col-lg-3 text-right">
      <div class="btn-group">
        <button type="button" class='btn btn-outline-secondary'>Past Projects</button>
        <a href='/#/projects/new' class="btn btn-outline-primary">
          <i class="fa fa-fw fa-plus mr-1"></i>
          Add Project
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search'
  }
</script>
