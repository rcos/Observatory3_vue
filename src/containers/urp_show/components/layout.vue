<template>
  <div class="container">
    <PageHeader title="URP Form Submission" />
    Uh oh, looks like you haven't submitted your URP form yet! Click below to do so:

    <b-button href="#/urp/new" block="true" size="lg" variant="outline-success">
      Create URP Form
    </b-button>

    <!-- <Preview /> -->

  </div>
</template>

<!-- // // // //  -->

<script>
import Preview from './preview'

export default {
  name: 'urp_show',
  components: {
    Preview
  }
}
</script>
