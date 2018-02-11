<template>
  <div class="container">
  	<h2>User Settings</h2>
  	<hr>
  	<p class="lead">{{ currentUser }}</p>
  </div>
</template>

<script>
export default {
  props: ['currentUser']
}
</script>


