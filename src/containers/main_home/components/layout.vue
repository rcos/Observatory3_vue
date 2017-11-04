<template>
    <div class="container h-100">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-12">
              <MissionStatement/>
            </div>
        </div>
    </div>
</template>

<script>
  import MissionStatement from './missionStatement.vue'

  export default {
    name: 'main_home',
    components: {
      MissionStatement
    }
  }
</script>
