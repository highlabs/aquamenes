<template>
  <div class="container">
    <Title />
    <Button title="narf" @click="narf" />
  </div>
</template>

<script>
import Button from '~/components/Button.vue'
import Title from '~/components/Title.vue'

export default {
  components: {
    Button,
    Title
  },
  methods: {
    narf() {
      console.log('narf2')
    }
  }
}
</script>
