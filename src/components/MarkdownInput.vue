<template>
  <mavon-editor style="height: 100%"></mavon-editor>
</template>

<!-- // // // //  -->

<script>
import mavonEditor from 'mavon-editor'

export default {
  name: 'MarkdownInput',
  components: {
    mavonEditor
  },
  data () {
    return { value: '' }
  }
}
</script>
