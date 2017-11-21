<template>
  <input :class="'btn ' + props.css" type="submit" :value="props.label">
</template>

<script>
export default {
  name: 'FormSubmit',
  props: ['props']
}
</script>

