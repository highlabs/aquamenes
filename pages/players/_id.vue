<template>
  <div class="container mx-auto">
    <Title title="Players" />

    <Subtitle :title="`Set Player ${playerId}`" />

    <div>
      <label for="nickname">Your Nickname</label>
      <Input
        id="nickname"
        v-model="player.name"
        value="player.name"
        placeholder="Ford Prefect"
      />
    </div>

    <div v-for="(paper, index) in player.papers" :key="index">
      <label class="block mt-2" :for="'paper' + index"
        >Paper Number {{ index + 1 }}</label
      >
      <Input
        :id="'paper' + index"
        v-model="player.papers[index]"
        :value="paper"
        placeholder="Be creative!"
      />
    </div>

    <Button title="Add Another Player" @click="addMorePlayer" />
    <p v-if="errors.name.length">{{ errors.name }}</p>
    <p v-if="errors.papers.length">{{ errors.papers }}</p>

    <Button
      v-if="playersList.length >= 4"
      class="w-full"
      title="Start Game"
      @click="startGame"
    />
  </div>
</template>

<script>
import Button from '~/components/Button.vue'
import Title from '~/components/Title.vue'
import Subtitle from '~/components/Subtitle.vue'
import Input from '~/components/Input.vue'

export default {
  components: {
    Button,
    Title,
    Subtitle,
    Input
  },
  data() {
    return {
      showHowMany: true,
      errors: {
        name: '',
        papers: ''
      },
      player: {}
    }
  },
  computed: {
    papers() {
      return this.$store.state.players.papers
    },
    playersList() {
      return this.$store.state.players.playersList
    },
    playerId() {
      return parseFloat(this.$route.params.id)
    }
  },
  mounted() {
    this.$nextTick(function() {
      if (this.playersList.length < this.playerId) {
        this.$router.push('/papers')
      }
      if (!this.playersList[this.playerId]) {
        this.setHowMany()
        return false
      }
      this.player = this.playersList[this.playerId]
    })
  },
  methods: {
    setHowMany() {
      this.generatePlayerProfile(this.papers)
    },
    hasErrors() {
      const { name, papers } = this.player
      const self = this
      self.errors.name = ''
      self.errors.papers = ''

      if (name.length === 0) {
        self.errors.name = 'Name are required'
        return true
      }

      const papersLength = papers.filter((paper) => paper.length === 0).length
      if (papersLength) {
        self.errors.papers = 'All papers are required'
        return true
      }

      return false
    },
    generatePlayerProfile(quantity) {
      const paperEmptyArray = []
      for (let index = 0; index < quantity; index++) {
        paperEmptyArray.push('')
      }
      this.player = {
        name: '',
        papers: paperEmptyArray
      }
    },
    setPlayer() {
      if (this.hasErrors()) {
        return false
      }
      const playerRoute = `/players/${parseFloat(this.playersList.length) + 1}`
      this.$store.commit('players/setPlayerInfo', this.player)
      this.$router.push(playerRoute)
    },
    addMorePlayer() {
      this.setPlayer()
    },
    startGame() {
      if (this.player.name.length > 0) {
        this.setPlayer()
        return false
      }
      this.$router.push('/game')
      this.$store.dispatch('game/generateGame')
    }
  }
}
</script>
