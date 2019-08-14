<template>
  <h1 class="text-2xl font-bold pb-4 pt-2">{{ title }}</h1>
</template>

<script>
export default {
  name: 'Subtitle',
  props: {
    title: {
      type: String,
      default: 'Aquamenes'
    }
  }
}
</script>
