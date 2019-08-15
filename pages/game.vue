<template>
  <div class="container">
    <Title title="Game" />

    <Teams :teams="teams" />

    <Button title="Shuffle Teams" @click="teamShuffle" />
  </div>
</template>

<script>
import Button from '~/components/Button.vue'
import Title from '~/components/Title.vue'
import Teams from '~/components/Teams.vue'

export default {
  components: {
    Button,
    Title,
    Teams
  },
  computed: {
    teams() {
      return this.$store.state.game.teams
    }
  },
  methods: {
    teamShuffle() {
      this.$store.dispatch('game/splitPlayers')
    }
  }
}
</script>
