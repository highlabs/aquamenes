<template>
  <div class="container mx-auto text-center">
    <Title title="Aquamenes" />
    <div>
      <Subtitle title="What's is Aquamenes?" />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse itaque
        consequatur optio, maiores repellendus nemo fuga veniam ratione ut? Eum
        iste aliquid soluta blanditiis inventore illo voluptatibus libero,
        tempora omnis!
      </p>
    </div>
    <LinkButton title="Start!" url="papers" />
  </div>
</template>

<script>
import Title from '~/components/Title.vue'
import Subtitle from '~/components/Subtitle.vue'
import LinkButton from '~/components/LinkButton.vue'

export default {
  components: {
    Title,
    Subtitle,
    LinkButton
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
