<template>
  <div class="row">

    <div class="col-sm-6">
      <FormSelect label="Event Type" v-model="model.status" :options="dropdownOptions" />
    </div>

    <!-- <div class="col-sm-6"> -->
      <!-- <FormInput label="Label" type="text" v-model="model.label" /> -->
    <!-- </div> -->

    <div class="col-sm-6">
      <FormInput label="Location" type="text" v-model="model.location" />
    </div>

    <div class="col-sm-12">
      <!-- TODO - this should be a TextArea component -->
      <FormInput label="Description" type="text" v-model="model.description" />
    </div>

    <div class="col-sm-4">
      <FormInput label="Date" type="date" v-model="model.date" />
    </div>

    <div class="col-sm-4">
      <FormInput label="Start" type="time" v-model="model.start_time" />
    </div>

    <div class="col-sm-4">
      <FormInput label="End" type="time" v-model="model.end_time" />
    </div>

    <div class="col-sm-12 text-right">
      <FormSubmit />
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FormInput from '@/components/FormInput'
import FormSelect from '@/components/FormSelect'
import FormSubmit from '@/components/FormSubmit'

export default {
  name: 'EventForm',
  components: {
    FormInput,
    FormSelect,
    FormSubmit
  },
  computed: mapGetters({
    model: 'blog/newModel',
    dropdownOptions: 'event/typeDropdown'
  })
}
</script>
