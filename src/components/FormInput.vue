<template>
	<div class="form-group">
	  <label :v-if="label" :for="'exampleInput' + label">{{label}}</label>
	  <input :value="value" ref="input" v-on:input="updateValue($event.target.value)" :type="type" class="form-control" :id="'exampleInput' + label" :aria-describedby="name + 'Help'" :placeholder="placeholder">
	  <small :v-if="help" :id="name + 'Help'" class="form-text text-muted">{{ help }}</small>

	</div>
</template>

<script>
export default {
  name: 'FormInput',
  props: [ 'name', 'label', 'type', 'placeholder', 'help', 'value' ],
  computed: {},
  methods: {
    // Proxies the
    updateValue (value) {
      // If the value was not already normalized,
      // manually override it to conform
      this.$refs.input.value = value
      // Emit the number value through the input event
      // TODO - handle Number input
      this.$emit('input', value)
    }
  }
}
</script>
