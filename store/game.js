import { flatten } from 'underscore'
import splitArray from '~/utils/splitArray'
import shuffle from '~/utils/shuffle'

export const state = () => ({
  papersList: [],
  teams: [
    {
      name: '',
      players: [],
      correctPapers: []
    },
    {
      name: '',
      players: [],
      correctPapers: []
    }
  ]
})

export const mutations = {
  setTeamsPlayer(state, teams) {
    state.teams[0].players = teams[0]
    state.teams[1].players = teams[1]
  },
  setTeams(state, team) {
    state.teams = team
  },
  setPaperList(state, papers) {
    state.papersList = papers
  }
}

export const actions = {
  generateGame(context) {
    context.dispatch('splitPlayers')
    context.dispatch('shufflePapers')
  },
  splitPlayers({ rootState, commit }) {
    const players = shuffle(rootState.players.playersList)
    const playersName = players.map((player) => player.name)
    const teams = splitArray(playersName)

    commit('setTeamsPlayer', teams)
  },
  shufflePapers({ rootState, commit }) {
    const players = rootState.players.playersList
    const papers = flatten(players.map((item) => item.papers))
    const papersList = shuffle(papers)

    commit('setPaperList', papersList)
  },
  correctWord() {
    // todo
  },
  selectWord() {
    //  todo
  }
}
