<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <h6 class="card-header">New Achievement</h6>
        <div class="card-body">

          <FormInput v-model="title" type="text" label='Name' placeholder='Name' :error="errors['title']"/>
          <FormInput v-model="body" type="textarea" label='Description' placeholder='Description'/>
          <FormSubmit class='w-100' :click="onSubmit"/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormInput from '@/components/FormInput'
import FormSubmit from '@/components/FormSubmit'

export default {
  name: 'AchievementForm',
  components: {
    FormInput,
    FormSubmit
  },
  methods: {
    onSubmit () {
      console.log('ON SUBMIT')
    }
  },
  data () {
    return {
      title: '',
      body: '',
      errors: {}
    }
  }
}
</script>


