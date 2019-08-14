export const state = () => ({
  playersNumber: 4,
  playersList: [],
  papers: 5
})

export const mutations = {
  setPlayersNumber(state, quantity) {
    state.playersNumber = quantity
  },
  setPlayers(state, players) {
    state.playersList = players
  },
  setPapers(state, paper) {
    state.papers = paper
  },
  setPlayerInfo(state, playerInfo) {
    state.playersList.push(playerInfo)
  }
}

export const actions = {
  generatePlayers(context) {
    const players = context.state.playersNumber
    const playersList = []
    const player = {
      name: '',
      papers: []
    }
    for (let index = 0; index < players; index++) {
      playersList.push(player)
    }
    context.commit('setPlayers', playersList)
  }
}
