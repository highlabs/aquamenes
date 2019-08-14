<template>
  <input
    class="border-2 border-white w-full bg-black p-4 my-2 inline-block"
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
