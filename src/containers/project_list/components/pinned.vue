<template>
  <div class="col-lg-3">
    <div class="row-grid">


      <div class="card">
        <h6 class="card-header">
          <i class="fa fa-fw fa-folder-open-o"></i>
          My Projects
        </h6>
        <div class="card-body pt-1 pb-1">
          <p class="card-text">
            <dl class="dl-horizontal">
              <dd>
                <a href="/#/">Observatory</a>
              </dd>
              <dd>
                <a href="/#/">YACS</a>
              </dd>
            </dl>
          </p>
        </div>
      </div>

      <div class="card mt-3">
        <h6 class="card-header">
          <i class="fa fa-fw fa-star-o"></i>
          Starred
        </h6>
        <div class="card-body pt-1 pb-1">
          <p class="card-text">
            <dl class="dl-horizontal">
              <dd>
                <a href="/#/">Observatory</a>
              </dd>
            </dl>
          </p>
        </div>
      </div>

      <button type="button" class='btn btn-outline-secondary w-100 mt-3'>
        <i class="fa fa-fw fa-backward mr-1"></i>
        Past Projects
      </button>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'project_pinned'
  }
</script>

