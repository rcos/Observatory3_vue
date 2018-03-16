<template>
  <div class="row">
    <div class="col-lg-4">
      <FormInput v-model="model.title" name="title" label="Title" type='text' placeholder='Title' help="Blog Title" />
    </div>

    <div class="col-lg-4">
      <ProjectSelect />
    </div>

    <div class="col-lg-4">
      <FormInput v-model="model.body" name="body" label="Body" type='text' placeholder='Body' help="Blog Body" />
    </div>

    <div class="col-lg-6">
      <FormSubmit class='w-100' :click="onSubmit"/>
    </div>
  </div>
</template>

<!-- // // // // -->

<script>
import FormInput from '@/components/FormInput'
import ProjectSelect from '@/components/ProjectSelect'
import FormSubmit from '@/components/FormSubmit'

export default {
  name: 'BlogForm',
  props: ['model', 'onSubmit'],
  components: {
    FormInput,
    ProjectSelect,
    FormSubmit
  }
}
</script>
