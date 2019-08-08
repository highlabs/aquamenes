<template>
  <div class="container">
    <Title title="Add" />
    <LinkButton title="narf" />
  </div>
</template>

<script>
import LinkButton from '~/components/LinkButton.vue'
import Title from '~/components/Title.vue'

export default {
  components: {
    LinkButton,
    Title
  }
}
</script>
