import { flatten } from 'underscore'
import { shuffle } from '~/utils/shuffle'

function splitArray(array) {
  const half = Math.floor(array.length / 2)
  const firstHalf = array.slice(0, half)
  const secondHalf = array.slice(half, array.length)

  return [firstHalf, secondHalf]
}
export const state = () => ({
  papersList: [],
  teams: [
    {
      name: '',
      players: [],
      correctWords: []
    },
    {
      name: '',
      players: [],
      correctWords: []
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
    context.dispatch('shuffleWords')
    context.dispatch('setTeamOrder')
  },
  splitPlayers({ rootState, commit }) {
    const players = shuffle(rootState.players.playersList)
    const playerList = JSON.parse(JSON.stringify(players))
    const playersName = playerList.map((player) => player.name)
    const teams = splitArray(playersName)

    commit('setTeamsPlayer', teams)
  },
  shuffleWords({ rootState, commit }) {
    const players = rootState.players.playersList
    const papers = flatten(players.map((item) => item.papers))
    const papersList = shuffle(papers)

    commit('setPaperList', papersList)
  },
  setTeamOrder(context) {
    const teams = shuffle(context.state.teams)
    context.commit('setTeams', teams)
  },
  correctWord() {
    // todo
  },
  selectWord() {
    //  todo
  }
}
