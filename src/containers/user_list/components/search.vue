<template>
  <div class="row pt-3 pb-2">
    <div class="col-lg-6">
      <form class="form-inline pb-3">
        <input class="form-control mr-sm-" type="search" placeholder="Search for a developer">
      </form>
    </div>
    <div class="col-lg-6" align="right">
      <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group" role="group" aria-label="Sort A-Z">
          <button type="button" class="btn btn-secondary"></button>
        </div>
        <div class="btn-group" role="group" aria-label="Current/Past Users">
          <button type="button" class="btn btn-secondary">Past</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'user_search'
  }
</script>
