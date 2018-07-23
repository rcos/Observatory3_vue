<template>
  <div class="container">
    <PageHeader :title="model.name" />

    <div class="row">

      <div class="col-sm-12 col-lg-3">
        <Sidebar :model="model"/>

        <a class="btn btn-block btn-warning mt-3" :href=" '#/users/' + model._id + '/edit' ">
          <i class="fa fa-pencil mr-2"></i>
          Edit Profile
        </a>

      </div>

      <div class="col-sm-12 col-lg-9 pl-lg-0 mt-3 mt-lg-0">
        <Tech :model="model"/>
        <Bio :model="model"/>
        <Projects :model="model"/>
      </div>

    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import Sidebar from './sidebar'
import Tech from './tech'
import Bio from './bio'
import Projects from './projects'

export default {
  props: ['model'],
  components: { Sidebar, Tech, Bio, Projects }
}
</script>
