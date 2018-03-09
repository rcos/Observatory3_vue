
<template>
  <div class="card card-body">
    <a :href="'#/smallgroups/' + model._id">
      {{ model.name }}
    </a>
    <pre class='text-light bg-dark'>{{ model }}</pre>
  </div>
</template>

<!-- // // // //  -->

<script>
export default {
  props: ['model']
}
</script>


