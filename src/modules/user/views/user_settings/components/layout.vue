<template>
  <div class="container">
  	<h2>User Settings</h2>
  	<hr>
    <pre class="bg-dark text-light">{{ currentUser }}</pre>
  </div>
</template>

<script>
export default {
  props: ['currentUser']
}
</script>



