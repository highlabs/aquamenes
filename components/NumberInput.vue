<template>
  <input
    class="border-2 border-white bg-black p-4 my-2 inline-block w-full"
    type="number"
    :value="value"
    required
    @input="handleInput"
  />
</template>

<script>
export default {
  name: 'InputNumber',
  model: {
    event: 'modified'
  },
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    handleInput(newVal) {
      this.$emit('modified', parseFloat(newVal.target.value))
    }
  }
}
</script>
