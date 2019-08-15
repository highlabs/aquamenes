<template>
  <div class="container mx-auto">
    <Title title="Players" />

    <Subtitle title="Set Papers" />

    <div>
      <label for="papers">How many papers?</label>
      <NumberInput
        id="papers"
        v-model="papers"
        :value="papers"
        min="3"
        placeholder="3+"
      />
    </div>
    <Button title="Done" @click="setHowMany" />
  </div>
</template>

<script>
import Button from '~/components/Button.vue'
import Title from '~/components/Title.vue'
import Subtitle from '~/components/Subtitle.vue'
import NumberInput from '~/components/NumberInput.vue'

export default {
  components: {
    Button,
    Title,
    Subtitle,
    NumberInput
  },
  data() {
    return {
      player: {}
    }
  },
  computed: {
    papers: {
      get() {
        return this.$store.state.players.papers
      },
      set(value) {
        return this.$store.commit('players/setPapers', value)
      }
    }
  },
  methods: {
    setHowMany() {
      if (this.papers <= 3) {
        return false
      }
      this.$router.push('players/0')
    }
  }
}
</script>
