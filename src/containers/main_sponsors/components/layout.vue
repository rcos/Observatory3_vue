<template>
  <div class="container">
    <PageHeader title="Sponsors" />

    <div class="row">
      <div class="col-lg-12">
      	<p class="lead"> Hello </p>

      	<ul class="list-group">
      		<li class="list-group-item" v-for="item in sponsors">
      			{{ item.name }}
      		</li>
      	</ul>
    
     </div>
    </div>
  </div>
</template>

<script>
// TASK - implement sponsors page
// https://github.com/rcos/observatory-client/issues/28
export default {
  name: 'main_sponsors',
  data () {
    return {
      sponsors: [
        { name: 'RedHat', logo: '', description: '' },
        { name: 'OSI', logo: '', description: '' },
        { name: 'NSF HFOSS', logo: '', description: '' },
        { name: 'Microsoft', logo: '', description: '' },
        { name: 'Google', logo: '', description: '' }
      ]
    }
  }
}
</script>


