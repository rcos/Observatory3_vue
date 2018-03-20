
<template>
  <div class="container">
    <PageHeader title="New Blog Post"/>
    <BlogForm :onSubmit="create" />
  </div>
</template>

 <!-- // // // //  -->

<script>
import BlogForm from '@/components/BlogForm'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'layout',
  components: {
    BlogForm
  },
  methods: mapActions({
    create: 'project/create'
  }),
  computed: mapGetters({

  })
}
</script>


