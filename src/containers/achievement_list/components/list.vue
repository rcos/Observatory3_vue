
<template>
  <div class='row'>
    <div v-for="m in collection" class='col-lg-12 mt-3'>
      <div class="card card-body bg-light">
      <p class="lead">TODO: add date</p>
        <h4 class="card-title">
          <a v-bind:href="'/#/achievements/' + m._id">{{m.name}}</a>
        </h4>
        <p class="card-text">{{m.description}}</p>
      </div>
    </div>
  </div>
</template>

<!-- // // // //  -->

<script>
export default {
  props: ['collection']
}
</script>
