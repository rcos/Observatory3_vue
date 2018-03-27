<template>
  <form>

    <div class="form-group">
      <label>Title: </label>
      <input type="title" class = "form-control" v-model="model.title" id="blogFormControlTitle">
    </div>

    <ProjectSelect />

    <div class="form-group">
     <label>Tags: </label>
     <input-tag placeholder="Project Tech" :tags="model.tags" />
     <ul class="list-group"></ul>
    </div>

    <div class="form-group">
      <label>Body: </label>
      <MarkdownInput v-model="model.body" />
    </div>

    <div class="col-lg-6">
      <FormSubmit class='w-100' :click="onSubmit"/>
    </div>

  </form>
</template>

<!-- // // // // -->

<script>
import InputTag from 'vue-input-tag'
import PageHeader from '@/components/PageHeader'
import FormSubmit from '@/components/FormSubmit'
import ProjectSelect from '@/components/ProjectSelect'
import MarkdownInput from '@/components/MarkdownInput'
import { mapGetters } from 'vuex'

export default {
  name: 'BlogForm',
  props: ['onSubmit'],
  components: {
    InputTag,
    PageHeader,
    FormSubmit,
    ProjectSelect,
    MarkdownInput
  },
  computed: mapGetters({
    model: 'blog/model'
  }),
  data () {
    return {
      tags: [

      ]
    }
  }
}
</script>
