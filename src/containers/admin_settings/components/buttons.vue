<template>
  <div class='col-lg-12'>
    <div class="btn-group" role="group">
      <button type="button" class="btn btn-primary" @click="createNewSemester">
        <i class="fa fa-fw fa-plus mr-1"></i>
        Create New Semester
      </button>
      <button type="button" class="btn btn-secondary">
        <i class="fa fa-fw fa-file-pdf-o mr-1"></i>
        Show URP form
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'buttons',
    methods: {
      createNewSemester () {
        console.log('createNewSemester')
      }
    }
  }
</script>
