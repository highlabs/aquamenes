<template>
  <input
    class="pixel-border border-2 border-white w-full bg-black p-4 mt-2 mb-4 inline-block"
    :value="value"
    required
    @input="handleInput"
  />
</template>

<script>
export default {
  name: 'Input',
  model: {
    event: 'modified'
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput(newVal) {
      this.$emit('modified', newVal.target.value)
    }
  }
}
</script>
