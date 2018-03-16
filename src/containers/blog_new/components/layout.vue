
<template>
  <div class="container">
    <PageHeader title="New Blog Post"/>

    <form>
      <div class="form-group">
        <label>Title: </label>
        <input type="title" class = "form-control" id="blogFormControlTitle">
      </div>

      <div class="form-group">
        <label>Project Select: </label>
        <select class="form-control" id="blogFormControlSelect">
          <option :value="project._id" v-for="project in projectCollection">
            {{ project.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
       <label>Tags: </label>
       <input-tag placeholder="Project Tech" :tags="tags" />
       <ul class="list-group"></ul>
      </div>

      <div class="form-group">
        <label>Body: </label>
        <textarea class="form-control" id="blogFormControlBody" rows="5"></textarea>
      </div>
      <button class="btn btn-success mt-4" @click="submit()">
        Submit
      </button>
    </form>

  </div>
</template>

 <!-- // // // //  -->

<script>
import InputTag from 'vue-input-tag'
import PageHeader from '@/components/PageHeader'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'layout',
  components: {
    InputTag,
    PageHeader
  },
  created () {
    return this.fetch()
  },
  data () {
    return {
      tags: [
        'HTML', 'JS', 'Bootstrap'
      ]
    }
  },
  methods: mapActions({
    fetch: 'project/fetchCollection',
    submit: 'project/create'
  }),
  computed: mapGetters({
    projectCollection: 'project/collection'
  })
}
</script>


