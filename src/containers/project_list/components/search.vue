<template>
  <div class="row pt-3 pb-2">
    <div class="col-lg-6">
      <form class="form-inline pb-3">
        <input class="form-control mr-sm-" type="search" placeholder="Search projects">
      </form>
    </div>
    <div class="col-lg-6">
      <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group" role="group" aria-label="Sort A-Z">
          <button type="button"></button>
        </div>
        <div class="btn-group" role="group" aria-label="Current/Past Users">
          <button type="button">Past</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search'
  }
</script>
