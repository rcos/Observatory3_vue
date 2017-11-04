
<template>
  <ul class="list-group">
    <a v-for="t in todos" v-bind:href="'/#/projects/' + t.id" :class="{active: t.completed}" class='list-group-item' >{{t.task}}</a>
  </ul>
</template>

<!-- // // // //  -->

<script>

export default {
  props: ['todos']
}
</script>


