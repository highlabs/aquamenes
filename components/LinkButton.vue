<template>
  <nuxt-link
    class="inline-block py-4 px-6 mt-2 mb-4 border-4 no-underline text-white"
    :to="url"
  >
    <span class="border-b-2 py-2">{{ title }}</span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'Link',
  props: {
    title: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: '/'
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
