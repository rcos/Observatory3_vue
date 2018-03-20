
<template>
  <div class="container">
    <PageHeader title="New Blog Post"/>
    <BlogForm :onSubmit="create" />
    <MarkdownInput />
  </div>
</template>

 <!-- // // // //  -->

<script>
import BlogForm from '@/components/BlogForm'
import MarkdownInput from '@/components/MarkdownInput'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'layout',
  components: {
    BlogForm,
    MarkdownInput
  },
  methods: mapActions({
    create: 'project/create'
  }),
  computed: mapGetters({

  })
}
</script>


