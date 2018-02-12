
<template>
  <div class="container">
    <!-- TOOD - abstract into PageHeader component -->
    <div class="row">
      <div class="col-sm-12">
      	<h3>{{ project.name }}</h3>
      	<hr>
      </div>
    </div>

    <!-- TODO - abstract into ProjectControls component -->
    <ProjectControls :project="project"/>

    <hr>

    <div class="row">
      <div class="col-sm-12">
        <p class="lead">TODO - 'Tech Tags' go here</p>
      </div>
    </div>

  	<p class="lead">{{ project.name }}</p>
  	<a class='btn btn-secondary' href="/#/projects/1/edit">Edit Project</a>
  </div>
</template>

<!-- // // // //  -->

<script>
import ProjectControls from './ProjectControls'

export default {
  props: ['project'],
  components: {
    ProjectControls
  }
}
</script>


