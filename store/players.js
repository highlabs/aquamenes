export const state = () => ({
  playersNumber: 4,
  playersList: [
    // {
    //   name: 'Ford',
    //   papers: ['Melancia', 'Açucar', 'Café', 'Mandioca', 'Berinjela']
    // },
    // {
    //   name: 'Arthur',
    //   papers: ['Saturno', 'Jupiter', 'Terra', 'Uranio', 'Netuno']
    // },
    // {
    //   name: 'Marvin',
    //   papers: ['Morango', 'Goiaba', 'Melancia', 'Tomate', 'Maçã']
    // },
    // {
    //   name: 'Trillian',
    //   papers: ['Pistola', 'Revolver', 'Fuzil', 'Granada', 'Besta']
    // }
  ],
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
  },
  setPlayerPaper(state, playerInfo) {
    const { value, playerId } = playerInfo
    console.log(value, playerId)
    state.playersList[playerId] = value
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
