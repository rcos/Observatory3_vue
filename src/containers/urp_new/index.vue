<template>
  <div>
    HELLO WORLD
  </div>
</template>

<!-- // // // //  -->

<script>
import ProjectForm from '@/components/ProjectForm'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'urp_new',
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
