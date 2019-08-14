<template>
  <div class="container mx-auto">
    <Title title="Players" />

    <Subtitle title="Set your nickname and Papers" />

    <div v-if="showHowMany" class="flex flex-col items-start">
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

    <div v-else class="flex flex-col items-start">
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
        <label :for="'paper' + index">Paper Number {{ index + 1 }}</label>
        <Input
          :id="'paper' + index"
          v-model="player.papers[index]"
          :value="paper"
          placeholder="Be creative!"
        />
      </div>

      <Button title="Add More" @click="addMorePlayer" />
      <p v-if="errors.name.length">{{ errors.name }}</p>
      <p v-if="errors.papers.length">{{ errors.papers }}</p>

      <Button class="w-full" title="StartGame" @click="startGame" />
    </div>
    <ul>
      <li v-for="(registeredPlayer, index) in playersList" :key="index">
        {{ registeredPlayer.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import Button from '~/components/Button.vue'
import Title from '~/components/Title.vue'
import Subtitle from '~/components/Subtitle.vue'
import Input from '~/components/Input.vue'
import NumberInput from '~/components/NumberInput.vue'

export default {
  components: {
    Button,
    Title,
    Subtitle,
    Input,
    NumberInput
  },
  data() {
    return {
      showHowMany: true,
      player: {
        name: '',
        papers: []
      },
      errors: {
        name: '',
        papers: ''
      }
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
    },
    playersList() {
      return this.$store.state.players.playersList
    }
  },
  methods: {
    setHowMany() {
      if (this.papers <= 3) {
        return false
      }
      this.generatePlayerProfile(this.papers)
      this.showHowMany = false
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

      this.$store.commit('players/setPlayerInfo', this.player)
      this.generatePlayerProfile(this.papers)
    },
    addMorePlayer() {
      this.setPlayer()
    },
    startGame() {
      this.setPlayer()
      this.$store.dispatch('game/generateGame')
    }
  }
}
</script>
