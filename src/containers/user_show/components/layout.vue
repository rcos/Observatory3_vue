
<template>
  <div class="container">
    <h3>{{model.name}}</h3>
    <hr>
    <div class="row">

      <div class="col-lg-3">

        <div class="card">
          <div class="card-body">
            <img class="profile-img w-100" :src="model.avatar"/>
            <h4 class='card-title text-center pt-3 mb-0'>{{model.name}}</h4>
          </div>

          <ul class="list-group list-group-flush">
            <a class='list-group-item' :href=" 'https://github.com/' + model.githubProfile ">
              <i class="fa fa-fw fa-github"></i>
              {{model.githubProfile}}
            </a>

            <a class='list-group-item' :href=" 'mailto:' + model.email ">
              <i class="fa fa-fw fa-envelope-o"></i>
              {{model.email}}
            </a>
          </ul>

        </div>
      </div>

      <div class="col-lg-9">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">
              Bio
            </h4>
            <p class="card-text">
              An awesome RCOS developer!
            </p>
          </div>
        </div>

        <Projects :model="model"/>

      </div>

    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import Projects from './projects'

export default {
  props: ['model'],
  components: { Projects }
}
</script>


<style type="text/css">
  .profile-img {
    border-radius: 50%;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  }
</style>
