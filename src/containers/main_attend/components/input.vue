<template>
  <div>
    <b-input-group>
      <b-form-input v-model="code"></b-form-input>
      <b-btn variant="outline-success" @click="submitCode({ code })">Submit attendance code</b-btn>
    </b-input-group>
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'

export default {
  name: 'input',
  methods: mapActions({
    submitCode: 'attendance/submitCode'
  }),
  data () {
    return {
      code: ''
    }
  }
}
</script>
