<template>
  <nuxt-link :to="url">
    <Button :title="title" />
  </nuxt-link>
</template>

<script>
import Button from '@/components/Button'

export default {
  name: 'Link',
  components: {
    Button
  },
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
