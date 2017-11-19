
<template>
  <div class='row'>
    <div v-for="m in collection" class='col-lg-12'>
      <div class="card card-body bg-light mb-3">

        <div class="row">
          <div class="col-lg-8">
            <h4 class="card-title">
              <i class="fa fa-fw fa-star-o"></i>
              <a v-bind:href="'/#/projects/' + m._id">{{m.name}}</a>
            </h4>
          </div>
        </div>

        <p class="card-text">{{m.description}}</p>

        <div class="row">
          <div class="col-lg-12">
            <div class="btn-group">
              <a class="btn btn-sm btn-outline-dark" target="_blank" :href="'https://github.com/' + m.githubUsername + '/' + m.githubProjectName">
                <i class="fa fa-fw fa-github mr-1"></i>
                Repository
              </a>

              <a class="btn btn-sm btn-outline-dark" :href="'/#/projects/' + m._id + '/blog'">
                <i class="fa fa-fw fa-newspaper-o mr-1"></i>
                Blog
              </a>

              <a class="btn btn-sm btn-outline-dark" target="_blank" :href="m.websiteUrl" v-if="m.websiteUrl">
                <i class="fa fa-fw fa-home mr-1"></i>
                Website
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
export default {
  props: ['collection']
}
</script>
