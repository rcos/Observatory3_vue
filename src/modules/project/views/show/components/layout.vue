
<template>
  <div class="container">
    <PageHeader :title="project.name" />

    <!-- TODO - abstract into ProjectControls component -->
    <ProjectControls :project="project"/>

    <hr>

    <div class="row">
      <div class="col-sm-12">
        <p class="lead">TODO - 'Tech Tags' go here</p>
      </div>
    </div>

    <Contributors/>

  	<p class="lead">{{ project.name }}</p>
  	<a class='btn btn-secondary' href="/#/projects/1/edit">Edit Project</a>
  </div>
</template>

<!-- // // // //  -->

<script>
import ProjectControls from './ProjectControls'
import Contributors from './Contributors'

export default {
  props: ['project'],
  components: {
    ProjectControls,
    Contributors
  }
}
</script>


