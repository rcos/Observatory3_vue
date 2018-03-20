<template>
  <form>

    <div class="form-group">
      <label>Title: </label>
      <input type="title" class = "form-control" id="blogFormControlTitle">
    </div>

    <ProjectSelect />

    <div class="form-group">
     <label>Tags: </label>
     <input-tag placeholder="Project Tech" :tags="tags" />
     <ul class="list-group"></ul>
    </div>

    <div class="form-group">
      <label>Body: </label>
      <MarkdownInput />
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
  data () {
    return {
      tags: [
        'HTML', 'JS', 'Bootstrap'
      ]
    }
  }
}
</script>
