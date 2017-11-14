<template>
  <div class="container">
  	<div class="row">
  		<div class="col-lg-12">

  			<h2>Project List</h2>

  			<hr>

  			<ul class="list-group mt-2 mb-4 text-center">
  				<a class="list-group-item" href="/#/projects/new">NEW</a>
  			</ul>

  			<ListView :todos="todos"></ListView>

        <p>{{ count }}</p>
        <button @click="increment()" class="btn btn-outline-primary">Increment</button>
        <button @click="decrement()" class="btn btn-outline-primary">Decrement</button>

  		</div>
  	</div>
  </div>
</template>

<!-- // // // //  -->

<script>
import ListView from './list.vue'
import store from '@/store'

export default {
  name: 'layout',
  computed: {
    count: () => {
      return store.getters['project/count']
    },

    todos: () => {
      console.log(store)
      return store.getters['project/todos']
    }
  },
  methods: {
    increment: () => {
      // return store.commit('project/increment')
      return store.dispatch('project/incrementAsync')
    },
    decrement: () => {
      return store.commit('project/decrement')
    }
  },
  components: {
    ListView
  }
}
</script>


