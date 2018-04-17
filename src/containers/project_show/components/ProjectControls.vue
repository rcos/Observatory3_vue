
<template>
  <div class="row">
    <div class="col-sm-4">

      <!--
      <div v-show="!isDefault">
        <button class="btn btn-outline-success" @click="joinProject" v-if="isAuthenticated">
          Join Project
        </button>
      </div>

      <div v-show="isDefault">
        <button class="btn btn-outline-danger" @click="leaveProject" v-if="isAuthenticated">
          Leave Project
        </button>
      </div>
      -->

      <div v-show="!isDefault">
        <button class="btn btn-outline-success" @click="markDefault" v-if="isAuthenticated">
          Mark Default
        </button>
      </div>

      <div v-show="isDefault">
        <button class="btn btn-outline-warning" @click="unmarkDefault" v-if="isAuthenticated">
          Unmark Default
        </button>
      </div>

      <div v-show="!isActive">
        <button class="btn btn-outline-success" @click="markActive" v-if="isAuthenticated">
          Mark Active Project
        </button>
      </div>

      <div v-show="isActive">
        <button class="btn btn-outline-warning" @click="markPast" v-if="isAuthenticated">
          Mark Past Project
        </button>
      </div>

      <button class="btn btn-outline-danger" v-if="isAuthenticated">
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

import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['project'],
  methods: mapActions({
    markDefault: 'project/markDefault',
    unmarkDefault: 'project/unmarkDefault',
    markActive: 'project/markActive',
    markPast: 'project/markPast'
  }),
  computed: mapGetters({
    isAuthenticated: 'auth/is_authenticated',
    isActive: 'project/isActive',
    isDefault: 'project/isDefault'
  })
}
</script>
