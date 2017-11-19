<template>
  <div class="row pt-3 pb-2">
    <div class="col-lg-9">
      <form class="form-inline pb-3">
        <input class="form-control form-control-lg w-100" type="search" placeholder="Search">
      </form>
    </div>
    <div class="col-lg-3 text-right">

      <a href='/#/projects/new' class="btn btn-lg btn-primary w-100">
        <i class="fa fa-fw fa-plus mr-1"></i>
        Add Project
      </a>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'search'
  }
</script>
