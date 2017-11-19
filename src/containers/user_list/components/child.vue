<template>
  <div class="card">
    <img class="card-img-top" src="//www.gravatar.com/avatar/17ffcfa0043043df29ea207cab582fa0?d=identicon&amp;s=248px"/>
    <div class="card-body text-center py-2 px-2">
      <a :href="'/#/users/' + model._id">
        {{model.name}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['model']
}
</script>
