
<template>
  <div class="row">
    <div class="col-sm-6">

      <button class="btn btn-outline-success">
        Join Project
      </button>

      <button class="btn btn-outline-danger">
        Leave Project
      </button>

      <button class="btn btn-outline-success">
        Mark Default
      </button>

      <button class="btn btn-outline-warning">
        Mark Past Project
      </button>

      <button class="btn btn-outline-danger">
        Edit Project
      </button>

    </div>

    <div class="col-sm-6 text-right">
      <div class="btn-group">
        <a href="#/" class="btn btn-outline-info">
          Website
        </a>
        <a href="#/" class="btn btn-outline-info">
          Repository
        </a>
        <a href="#/" class="btn btn-outline-info">
          Proposal
        </a>
        <a href="#/" class="btn btn-outline-info">
          Blog
        </a>
      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>

export default {
  props: ['project']
}
</script>


