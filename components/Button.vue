<template>
  <button
    class="inline-block py-4 px-6 mt-2 mb-4 border-4"
    @click="handleClick"
  >
    <span class="border-b-2 py-2">{{ title }}</span>
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

<style scoped>
a:hover,
a:focus {
  @apply bg-white text-black border-black;
}
a:hover > span {
  @apply border-black;
}
</style>
