<template>
  <div class='col-lg-4 text-center'>
    <h3>{{ details.title }}</h3>
    <p class="lead">{{ details.desc }}</p>
    <a class="btn btn-outline-primary" :href='details.link'>View {{ details.title }}</a>
  </div>
</template>

<script>
  export default {
    name: 'main_developers',
    props: ['details']
  }
</script>
