<template>
  <div class="row pt-3 pb-2">
    <div class="col-lg-9">
      <form class="form-inline pb-3">
        <input class="form-control form-control-lg w-100" type="search" placeholder="Search">
      </form>
    </div>
    <div class="col-lg-3 text-right">

      <div class="btn-group w-100">

        <a href='/#/' class="btn btn-outline-secondary w-100">
          <i class="fa fa-fw fa-sort-alpha-asc"></i>
          Sort
        </a>

        <a href='/#/projects/new' class="btn btn-outline-secondary w-100">
          <i class="fa fa-fw fa-backward mr-1"></i>
          Past
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
