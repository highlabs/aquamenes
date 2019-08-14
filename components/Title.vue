<template>
  <h1 class="text-4xl font-bold pb-4 pt-2">{{ title }}</h1>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      default: 'Aquamenes'
    }
  }
}
</script>
