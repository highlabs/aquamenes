<template>
  <button
    class="py-2 px-6 border rounded focus:bg-gray-300 hover:bg-gray-300"
    @click="handleClick"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick() {
      this.$emit('click')
    }
  }
}
</script>
