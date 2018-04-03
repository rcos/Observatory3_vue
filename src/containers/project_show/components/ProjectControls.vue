
<template>
  <div class="row">
    <div class="col-sm-4">

      <!-- TODO: Only have one button per choice at a time i.e.
      only display join project instead of both join and leave -->

      <button class="btn btn-outline-success">
        Join Project
      </button>

      <button class="btn btn-outline-danger">
        Leave Project
      </button>

      <button class="btn btn-outline-success" @click="markDefault">
        Mark Default
      </button>

      <button class="btn btn-outline-warning" @click="unmarkDefault">
        Unmark Default
      </button>

      <button class="btn btn-outline-success" @click="markActive">
        Mark Active Project
      </button>

      <button class="btn btn-outline-warning" @click="markPast">
        Mark Past Project
      </button>

      <button class="btn btn-outline-danger">
        Edit Project
      </button>

    </div>

    <div class="col-sm-6 text-right">
      <div class="btn-group">
        <a href="#/" class="btn btn-outline-info">
          Website
        </a>
        <a href="#/" class="btn btn-outline-info">
          Repository
        </a>
        <a href="#/" class="btn btn-outline-info">
          Proposal
        </a>
        <a href="#/" class="btn btn-outline-info">
          Blog
        </a>
      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>

import { mapActions } from 'vuex'

export default {
  props: ['project'],
  methods: mapActions({
    markDefault: 'project/markDefault',
    unmarkDefault: 'project/unmarkDefault',
    markActive: 'project/markActive',
    markPast: 'project/markPast',
    resetNewModel: 'project/resetNewModel'
  })
}
</script>
