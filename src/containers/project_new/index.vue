
<template>
  <div class="container">
    <PageHeader title="New Project" />
    <ProjectForm :model="model" :onSubmit="create" />
  </div>
</template>

<!-- // // // //  -->

<script>
import ProjectForm from '@/components/ProjectForm'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'project_new',
  components: {
    ProjectForm
  },
  metaInfo: {
    title: 'New Project'
  },
  created () {
    return this.resetNewModel()
  },
  methods: mapActions({
    create: 'project/create',
    resetNewModel: 'project/resetNewModel'
  }),
  computed: mapGetters({
    model: 'project/newModel'
  })
}
</script>


