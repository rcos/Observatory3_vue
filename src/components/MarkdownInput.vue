<template>
  <mavon-editor style="height: 100%" language="en" v-model="value" />
</template>

<!-- // // // //  -->

<script>

export default {
  name: 'MarkdownInput',
  data () {
    return { value: 'editing...' }
  }
}
</script>
