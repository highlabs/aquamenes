<template>
  <div class="container">
    <Title title="Game" />
    <Button title="Shuffle Teams" @click="teamShuffle" />

    <div class="flex flex-row">
      <div v-for="(team, index) in teams" :key="index" class="border m-3 p-3">
        <h1>{{ team.name }}</h1>
        <p v-for="(player, playIndex) in team.players" :key="playIndex">
          {{ player }}
        </p>
      </div>
    </div>
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
