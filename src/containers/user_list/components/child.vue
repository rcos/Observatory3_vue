<template>
  <div class="col-sm-2">
    <div class="card">
      <div class="card-body">
        <small class="text-muted">
          <a :href="'/#/users/' + model._id">
            {{model.name}}
          </a>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['model']
}
</script>
